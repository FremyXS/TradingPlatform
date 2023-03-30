import React from "react";
import { ProducType } from "../../../../../../types";

import './CatalogComponent.scss'

function CatalogComponent({ product }: { product: ProducType }) {
    return (
        <div className="catalog-component">
            <div className="catalog-component__image">
                <img height={117} width={199} src={product.image_url} title="image_game" />
            </div>
            <div className="catalog-component__description">
                <div className="catalog-component__description-title">
                    <h4>{product.title}</h4>
                </div>
                <div className="catalog-component__description-genres">
                    {product.platforms_name}
                    {product.type_products_name}
                    {product.genres_name}
                </div>
                <div className="catalog-component__description-price">
                    <h4>{product.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default CatalogComponent;