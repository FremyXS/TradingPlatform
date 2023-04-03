import React, { useState } from "react";

import Switcher from "../../../../components/Switcher/Switcher";
import ButtonSwitcher from "../../../../components/ButtonSwitcher/ButtonSwitcher";

import Button from "../../../../components/Button/Button";
import PanelRow from "./component/PanelRow/PanelRow";
import { FilterType, ProducType } from "../../../../types"
import { getDevelopersAsync, getGenresAsync, getPlatformsAsync, getProductsAsync, getTypeProductsAsync, postDeveloperAsync, postGenreAsync, postPlatformAsync, postTypeProductAsync } from "../../../../api/product";

import './ProductsPanel.scss';

function ProductsPanel({ onSetWindowSetting }: 
    { onSetWindowSetting: (headerName: string, 
        onButtonSubmit: (body: { name: string }) => void, 
        category: "filters" | "products") => void }) {

    const [switherAccount, setSwitherAccount]
        = useState<"Products" | "Genres" | "Platforms" | "Type Products" | "Developers">("Products");
    const [content, setContent] = useState<ProducType[] | FilterType[]>([]);
    const [postMethod, setPostMethod] = useState<(body: { name: string }) => void >(postDeveloperAsync);

    async function loadProductsAsync() {
        setSwitherAccount("Products");
        const { data } = await getProductsAsync();
        setContent(data);
        setPostMethod(postDeveloperAsync);
    }

    async function loadGenresAsync() {
        setSwitherAccount("Genres");
        const { data } = await getGenresAsync();
        setContent(data);
        setPostMethod(postGenreAsync);
    }

    async function loadPlatformsAsync() {
        setSwitherAccount("Platforms");
        const { data } = await getPlatformsAsync();
        setContent(data);
        setPostMethod(postPlatformAsync);
    }

    async function loadTypeProductsAsync() {
        setSwitherAccount("Type Products");
        const { data } = await getTypeProductsAsync();
        setContent(data);
        setPostMethod(postTypeProductAsync);
    }

    async function loadDevelopersAsync() {
        setSwitherAccount("Developers");
        const { data } = await getDevelopersAsync();
        setContent(data);
        setPostMethod(postDeveloperAsync);
    }


    const getFieldSettings = () => {
        switch (switherAccount) {
            case "Products":
                return "products";
            default:
                return "filters";
        }
    }

    async function getPostMethod(body: {name: string}) {
        switch (switherAccount) {
            case "Developers":
                return postDeveloperAsync(body);
            case "Genres":
                return postGenreAsync(body);
            case "Platforms":
                return postPlatformAsync(body);
            case "Type Products":
                return postTypeProductAsync(body);
            default:
                throw new DOMException("sdgdsgsdg");
        }
    }

    return (
        <div className="products-panel">
            <Switcher>
                <ButtonSwitcher
                    isChecked={switherAccount === "Products"}
                    onClick={() => loadProductsAsync()}>
                    Товары
                </ButtonSwitcher>
                <ButtonSwitcher
                    isChecked={switherAccount === "Genres"}
                    onClick={() => loadGenresAsync()}>
                    Жанры
                </ButtonSwitcher>
                <ButtonSwitcher
                    isChecked={switherAccount === "Platforms"}
                    onClick={() => loadPlatformsAsync()}>
                    Платформы
                </ButtonSwitcher>
                <ButtonSwitcher
                    isChecked={switherAccount === "Type Products"}
                    onClick={() => loadTypeProductsAsync()}>
                    Типы
                </ButtonSwitcher>
                <ButtonSwitcher
                    isChecked={switherAccount === "Developers"}
                    onClick={() => loadDevelopersAsync()}>
                    Разработчики
                </ButtonSwitcher>
                <ButtonSwitcher
                    isChecked={switherAccount === "Developers"}
                    onClick={() => loadDevelopersAsync()}>
                    Аккаунты
                </ButtonSwitcher>
            </Switcher>
            <div className="products-panel__content">
                <Button type="button"
                    onClick={() => {
                        onSetWindowSetting(switherAccount,
                            getPostMethod,
                            getFieldSettings())
                    }}>
                    Добавить
                </Button>
                <div className="products-panel__content-data" >
                    {switherAccount === "Products" ?
                        (content as ProducType[]).map((value, index) =>
                            <PanelRow key={index} title={value.title} />
                        )
                        :
                        (content as FilterType[]).map((value, index) =>
                            <PanelRow key={index} title={value.name} />
                        )
                    }
                </div>

            </div>
        </div>
    );


}

export default ProductsPanel;