import React, { useEffect, useState } from "react";

import Switcher from "../../../../components/Switcher/Switcher";
import ButtonSwitcher from "../../../../components/ButtonSwitcher/ButtonSwitcher";
import Button from "../../../../components/Button/Button";
import PanelRow from "./component/PanelRow/PanelRow";

import { FilterType } from "../../../../types"

import { deleteGenreAsync, getGenresAsync } from "../../../../api/products/filters/genres.api";
import { deletePlatformAsync, getPlatformsAsync } from "../../../../api/products/filters/platforms.api";
import { deleteTypeProductAsync, getTypeProductsAsync } from "../../../../api/products/filters/type_products.api";
import { deleteDeveloperAsync, getDevelopersAsync } from "../../../../api/products/filters/developers.api";

import './FiltersPanel.scss';

interface FiltersPanelType{
    onSetWindowSetting: 
        (headerName: "Genres" | "Platforms" | "Type Products" | "Developers") => void,
    onSetWundowUpdate : 
        (headerName: "Genres" | "Platforms" | "Type Products" | "Developers", value: string) => void
}

function FiltersPanel({ onSetWindowSetting, onSetWundowUpdate } : FiltersPanelType) {

    const [switherAccount, setSwitherAccount]
        = useState<"Genres" | "Platforms" | "Type Products" | "Developers">("Genres");

    const [content, setContent] = useState<FilterType[]>([]);

    useEffect(() => {
        loadGenresAsync();
    }, [])

    async function loadGenresAsync() {
        setSwitherAccount("Genres");
        const { data } = await getGenresAsync();
        setContent(data);
    }

    async function loadPlatformsAsync() {
        setSwitherAccount("Platforms");
        const { data } = await getPlatformsAsync();
        setContent(data);
    }

    async function loadTypeProductsAsync() {
        setSwitherAccount("Type Products");
        const { data } = await getTypeProductsAsync();
        setContent(data);
    }

    async function loadDevelopersAsync() {
        setSwitherAccount("Developers");
        const { data } = await getDevelopersAsync();
        setContent(data);
    }

    async function onClickDeleteAsync(filter: FilterType) {
        // eslint-disable-next-line no-restricted-globals
        const isDelete = confirm(`Вы действительно хотите удалить фильтр ${filter.name}`);

        if (!isDelete) {
            return;
        }

        switch (switherAccount) {
            case "Genres":
                await deleteGenreAsync(filter);
                break;
            case "Developers":
                await deleteDeveloperAsync(filter);
                break;
            case "Platforms":
                await deletePlatformAsync(filter);
                break;
            case "Type Products":
                await deleteTypeProductAsync(filter);
                break;
            default:
                throw new DOMException("Incorect type name");
        }
    }

    function onClickUpdateAsync(value: string) {

    }

    return (
        <div className="filters-panel">
            <Switcher>
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
            </Switcher>
            <div className="filters-panel__content">
                <Button type="button"
                    onClick={() => {
                        onSetWindowSetting(switherAccount)
                    }}>
                    Добавить
                </Button>
                <div className="filters-panel__content-data" >
                    {
                        content.map((value, index) =>
                            <PanelRow key={index}
                                title={value.name}
                                onClickDelete={() => onClickDeleteAsync(value)}
                                onClickUpdate={() => onSetWundowUpdate(switherAccount, value.name)} 
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default FiltersPanel;