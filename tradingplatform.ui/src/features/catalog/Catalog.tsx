import React, { useEffect, useState } from "react";
import FiltersBlock from "./components/FiltersBlock/FiltersBlock";
import CatalogList from "./components/CatalogList/CatalogList";
import { getProductsAsync } from "../../api/product";
import { ProducType } from "../../types";

import './Catalog.scss';
import { PathType } from "./components/FiltersBlock/types";

function Catalog() {
    const[products, setProducts] = useState<ProducType[]>([]);
    const[ovverideProducts, setOvverideProducts] = useState<ProducType[]>([]);

    const [pathData, setPathData] = useState<PathType>({
        developers: [],
        genre: [],
        platforms: [],
        types: [],
        minPrice: "",
        maxPrice: "",
    })
    
    useEffect(() => {
        loadProductsAsync();
    }, [])

    useEffect(() => {
        loadOvverideProductsaAsync();
        console.log(ovverideProducts);
    }, [pathData])

    const onHandleNavigate = (filterName: "developers" | "genre" | "platforms" | "types", value: string, e: any) => {
        if (!e.target.checked) {
            const index = pathData[filterName].indexOf(value);
            setPathData({
                ...pathData,
                [filterName]: [...pathData[filterName].slice(0, index), ...pathData[filterName].slice(index + 1)]
            })
        }
        else {
            if ((pathData[filterName] as []).length === 0) {
                setPathData({
                    ...pathData,
                    [filterName]: [value]
                })
            }
            else {
                setPathData({
                    ...pathData,
                    [filterName]: [...pathData[filterName], value]
                })
            }
        }
    }

    return (
        <div className="catalog">
            <div className="catalog-in">
                <div className="catalog-title">
                    <h1>Каталог</h1>
                </div>
                <div className="catalog-content">
                    <CatalogList products={ovverideProducts} />
                    <FiltersBlock onHandleNavigate={onHandleNavigate}/>
                </div>
            </div>
        </div>
    )

    function loadOvverideProductsaAsync() {
        let afterOvverideProducts: ProducType[] = products;
        
        if(pathData.developers.length > 0){
            afterOvverideProducts = afterOvverideProducts.filter((el) => {
                return pathData.developers.includes(el.developers_name);
            });
            console.log(afterOvverideProducts);
        }
        if(pathData.genre.length > 0){
            afterOvverideProducts = afterOvverideProducts.filter((el) => {
                return pathData.genre.includes(el.genres_name);
            });
        }
        if(pathData.platforms.length > 0){
            afterOvverideProducts = afterOvverideProducts.filter((el) => {
                return pathData.platforms.includes(el.platforms_name);
            });
        }
        if(pathData.types.length > 0){
            afterOvverideProducts = afterOvverideProducts.filter((el) => {
                return pathData.types.includes(el.type_products_name);
            });
        }

        if(pathData.developers.length === 0 && pathData.genre.length === 0
            && pathData.platforms.length === 0 && pathData.types.length === 0){
                setOvverideProducts(products); 
        }
        else{
            setOvverideProducts(afterOvverideProducts); 
        }       
    }

    async function loadProductsAsync(){
        const {data} = await getProductsAsync();
        setProducts(data);
        setOvverideProducts(data);
    }

}

export default Catalog;