import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProducType } from "../../../../types";
import './ProductCard.scss'

function ProductCard({ product }: { product: ProducType }) {
    const navigate = useNavigate();
    return (
        <Link className="product-card"
            to={`product/${product.id}`}>
            <img
                src={product.image_url}
                title="game" />
            <div className="product-card__info">
                <div>{product.title}</div>
                <div>{product.price}</div>
            </div>
        </Link>
    );
}

export default ProductCard;