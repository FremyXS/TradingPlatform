import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { getProductAsync } from '../../../../api/product';
import Button from "../../../../components/Button/Button";
import { CartProductData, ProducType } from "../../../../types";
import './ProductInfo.scss';

function ProductInfo(){
    const { id } = useParams()
    const [productInfo, setProductInfo] = useState<ProducType>({
        id: 0,
        title: "",
        description: "",
        price: 0
    });
    const [cookies, setCookie] = useCookies(['cart']);

    useEffect(() => {
        loadProductAsync();
    }, [])

    return(
        <div className="product-info">
            <div className="product-info__header"
            style={{
                backgroundImage: "url(https://7themes.su/_ph/28/313544153.jpg?1674990037)"
            }}
            >
            </div>
            <div className="product-info__in">
                <div className="product-info__in-content">
                    <div className="product-info__in-content__left">
                        <img src="https://7themes.su/_ph/28/313544153.jpg?1674990037" 
                        />
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

    async function loadProductAsync(){
        if(id){
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

        try{
            setCookie('cart', JSON.stringify([...cookies.cart, data]), { path: '/' });
        }
        catch{
            setCookie('cart', JSON.stringify([data]), { path: '/' });
        }
    }
}

export default ProductInfo;