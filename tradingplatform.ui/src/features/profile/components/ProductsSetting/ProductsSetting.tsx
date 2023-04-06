import React, { useEffect, useState } from "react";

import WindowModal from "../../../../layouts/window-modal/WindowModal";
import Input from "../../../../components/Input/Input";
import Switcher from "../../../../components/Switcher/Switcher";
import ButtonSwitcher from "../../../../components/ButtonSwitcher/ButtonSwitcher";
import Button from "../../../../components/Button/Button";

import { FilterType, ProducType } from "../../../../types";

import { getGenresAsync } from "../../../../api/products/filters/genres.api";
import { getPlatformsAsync } from "../../../../api/products/filters/platforms.api";
import { getTypeProductsAsync } from "../../../../api/products/filters/type_products.api";
import { getDevelopersAsync } from "../../../../api/products/filters/developers.api";

import { getProductsBySellerIdAsync, postProductAsync } from "../../../../api/products/product";
import PanelRow from "../../../account/components/ProductsPanel/component/PanelRow/PanelRow";

import './ProductsSetting.scss';

function ProductsSetting({ idUser }: { idUser: number }) {
    const [switcher, setSwitcher] = useState<"Продукты" | "Заказы">("Продукты");
    const [productForm, setProductForm] = useState<ProducType>({
        id: undefined,
        title: "",
        image_url: "",
        description: "",
        release_date: "",
        price: 0,
        genres_name: "",
        type_products_name: "",
        platforms_name: "",
        developers_name: "",
        seller_id: 0
    });
    const [products, setProducts] = useState<ProducType[]>([]);

    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const [genres, setGenres] = useState<FilterType[]>([]);
    const [platforms, setPlatforms] = useState<FilterType[]>([]);
    const [typeProducts, setTypeProducts] = useState<FilterType[]>([]);
    const [developers, setDevelopers] = useState<FilterType[]>([]);

    useEffect(() => {
        loadProductsAsync();
        loadGenresAsync();
        loadDevelopersAsync();
        loadPlatformsAsync();
        loadTypeProductsAsync();
    }, [products])

    async function loadProductsAsync() {
        const { data } = await getProductsBySellerIdAsync({ id: idUser });
        setProducts(data);
    }

    async function loadGenresAsync() {
        const { data } = await getGenresAsync();
        setGenres(data);
    }

    async function loadPlatformsAsync() {
        const { data } = await getPlatformsAsync();
        setPlatforms(data);
    }

    async function loadTypeProductsAsync() {
        const { data } = await getTypeProductsAsync();
        setTypeProducts(data);
    }

    async function loadDevelopersAsync() {
        const { data } = await getDevelopersAsync();
        setDevelopers(data);
    }

    async function createProductAsync() {
        await postProductAsync({
            ...productForm,
            seller_id: idUser,
            price: Number(productForm.price)
        });
    }

    const getModalWindow = () => {

        const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;

            const updatedForm = {
                ...productForm,
                [name]: value,
            };

            setProductForm(updatedForm);
        }

        return <WindowModal
            headerName={"Product"}
            iconHead={undefined}
            onClick={() => setIsShowModal(false)} >
            <div className="product-window">
                <div className="product-window__inputs">
                    <Input name="title"
                        onChange={onHandleChange}
                        placeHolder={"title".toUpperCase()}
                        value={productForm.title} />
                    <Input name="description"
                        onChange={onHandleChange}
                        placeHolder={"description".toUpperCase()}
                        value={productForm.description} />
                    <Input name="image_url"
                        onChange={onHandleChange}
                        placeHolder={"image_url".toUpperCase()}
                        value={productForm.image_url} />
                    <Input name="release_date"
                        onChange={onHandleChange}
                        placeHolder={"release_date".toUpperCase()}
                        value={productForm.release_date} />
                    <Input name="price"
                        onChange={onHandleChange}
                        placeHolder={"price".toUpperCase()}
                        value={productForm.price.toString()} />
                    <div className="product-window__inputs-radios">
                        <p>Жанр:</p>
                        <div className="product-window__inputs-radios__element">
                            {genres.map((el, index) =>
                                <div key={index}>
                                    <span>{el.name}</span>
                                    <input onChange={onHandleChange}
                                        type="radio" name="genres_name" value={el.name} />
                                </div>
                            )}
                        </div>
                        <p>Платформа:</p>
                        <div className="product-window__inputs-radios__element">
                            {platforms.map((el, index) =>
                                <div key={index}>
                                    <span>{el.name}</span>
                                    <input onChange={onHandleChange}
                                        type="radio" name="platforms_name" value={el.name} />
                                </div>
                            )}
                        </div>
                        <p>Тип:</p>
                        <div className="product-window__inputs-radios__element">
                            {typeProducts.map((el, index) =>
                                <div key={index}>
                                    <span>{el.name}</span>
                                    <input onChange={onHandleChange}
                                        type="radio" name="type_products_name" value={el.name} />
                                </div>
                            )}
                        </div>
                        <p>Разарботчик:</p>
                        <div className="product-window__inputs-radios__element">
                            {developers.map((el, index) =>
                                <div key={index}>
                                    <span>{el.name}</span>
                                    <input onChange={onHandleChange}
                                        type="radio" name="developers_name" value={el.name} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="product-window__button">
                    <Button type="submit" onClick={createProductAsync}>Добавить</Button>
                </div>
            </div>
        </WindowModal>
    }

    return (
        <>
            {isShowModal && getModalWindow()}
            <div className="products-setting">
                <Switcher>
                    <ButtonSwitcher
                        isChecked={switcher === "Продукты"}
                        onClick={() => setSwitcher("Продукты")}>
                        Продукты
                    </ButtonSwitcher>
                    <ButtonSwitcher
                        isChecked={switcher === "Заказы"}
                        onClick={() => setSwitcher("Заказы")}>
                        Заказы
                    </ButtonSwitcher>
                </Switcher>
                <div className="products-setting__content">
                    <Button type="button"
                        onClick={() => setIsShowModal(true)} >
                        Добавить
                    </Button>
                    <div className="filters-panel__content-data" >
                        {
                            products.map((value, index) =>
                                <PanelRow key={index}
                                    title={value.title}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsSetting;