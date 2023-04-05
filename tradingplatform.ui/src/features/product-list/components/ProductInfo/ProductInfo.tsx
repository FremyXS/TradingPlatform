import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { getProductAsync } from '../../../../api/products/product';
import Button from "../../../../components/Button/Button";
import { CartProductData, ProducType } from "../../../../types";
import './ProductInfo.scss';

function ProductInfo() {
    const { id } = useParams()
    const [productInfo, setProductInfo] = useState<ProducType>({
        id: 0,
        title: "",
        image_url: "",
        description: "",
        release_date: "",
        price: 0,
        genres_name: "",
        type_products_name: "",
        platforms_name: "",
        developers_name: ""
    });
    const [cookies, setCookie] = useCookies(['cart']);

    useEffect(() => {
        loadProductAsync();
    }, [])

    return (
        <div className="product-info">
            <div className="product-info__header"
                style={{
                    backgroundImage: `url(${productInfo.image_url})`
                }}
            >
            </div>
            <div className="product-info__in">
                <div className="product-info__in-content">
                    <div className="product-info__in-content__left">
                        <img src={productInfo.image_url}
                        />
                        <div className="product-info__in-content__left-attributes">
                            <dl className="product-info__in-content__left-attributes__keys">
                                <dt>Тип</dt>
                                <dt>Платформа</dt>
                                <dt>Жанр</dt>
                                <dt>Дата выхода</dt>
                                <dt>Разработчик</dt>
                            </dl>
                            <dl className="product-info__in-content__left-attributes__values"> 
                                <dt>{productInfo.type_products_name}</dt>
                                <dt>{productInfo.platforms_name}</dt>
                                <dt>{productInfo.genres_name}</dt>
                                <dt>{productInfo.release_date}</dt>
                                <dt>{productInfo.developers_name}</dt>
                            </dl>
                        </div>
                    </div>
                    <div className="product-info__in-content__right">
                        <div className="product-info__in-content__buy">
                            <h1>{productInfo.title}</h1>
                            <h1>{productInfo.price}</h1>
                            <Button type="button"
                                onClick={() => addDataIntoCahe()}>
                                в корзину
                            </Button>
                        </div>
                        <div className="product-info__in-content__description">
                            <p>{productInfo.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    async function loadProductAsync() {
        if (id) {
            const { data } = await getProductAsync(Number(id));
            setProductInfo(data);
        }
    }

    async function addDataIntoCahe() {
        const data: CartProductData = {
            id: productInfo.id,
            title: productInfo.title,
            count: 1,
            price: productInfo.price
        }

        try {
            setCookie('cart', JSON.stringify([...cookies.cart, data]), { path: '/' });
        }
        catch {
            setCookie('cart', JSON.stringify([data]), { path: '/' });
        }
    }
}

export default ProductInfo;