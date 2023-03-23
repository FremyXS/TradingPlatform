import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductAsync } from '../../../../api/product';
import Button from "../../../../components/Button/Button";

import { ProducType } from "../../../../types/ProducType";
import './ProductInfo.scss';

function ProductInfo(){
    const { id } = useParams()
    const [productInfo, setProductInfo] = useState<ProducType>({
        id: 0,
        title: "",
        description: "",
        price: 0
    });

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
                            <Button type="button">
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
}

export default ProductInfo;