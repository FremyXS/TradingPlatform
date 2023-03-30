import React from "react";
import { ProducType } from "../../../../types";
import CatalogComponent from "./components/CatalogComponent/CatalogComponent";

import './CatalogList.scss'
import { Link } from "react-router-dom";

function CatalogList({products}:{products: ProducType[]}){
    return(
        <div className="catalog-list">
            {products.map((el, index) => 
                <Link key={index} to={`../product/${el.id}`}>
                    <CatalogComponent product={el} />
                </Link>
            )}
        </div>
    )
}

export default CatalogList;