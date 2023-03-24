import React, { useEffect, useState } from "react";
import { getProductsAsync } from '../../api/product';
import ProductCard from "./components/ProductCard/ProductCard";
import { ProducType } from "../../types";

import './ProductList.scss';

function ProductList(){
    const[products, setProducts] = useState<ProducType[]>([]);

    useEffect(() => {
        setProductsAsync();
    }, [])

    return (
        <div className="product-list">
            <div className="product-list__in">
                {products.map((el, index) =>              
                    <ProductCard key={index} product={el}/>
                )}
            </div>
        </div>
    )

    async function setProductsAsync(){
        const {data} = await getProductsAsync();
        setProducts(data);

        // const data :ProducType = {
        //     id: 0,
        //     title: 'Убийца шлюх',
        //     description: 'УУбийца шлюхУбийца шлюхУбийца шлюхУбийца шлюхУбийца шлюхУбийца шлюхУбийца шлюхУбийца шлюхбийца шлюхУбийца шлюхУбийца шлюх',
        //     price: 9.99
        // }
        // setProducts([data, data, data, data]);
    }
}

export default ProductList;