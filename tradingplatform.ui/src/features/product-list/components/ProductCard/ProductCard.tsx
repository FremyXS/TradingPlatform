import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProducType } from "../../../../types/ProducType";
import './ProductCard.scss'

function ProductCard({product} : {product: ProducType}){
    const navigate = useNavigate();
    return (
        <Link className="product-card"
        to={`product/${product.id}`}>
            <img 
            src="https://7themes.su/_ph/28/313544153.jpg?1674990037" 
            title="game"/>
            <div className="product-card__info">                
                <div>{product.title}</div>
                <div>{product.price}</div>
            </div>
        </Link>
    );
}

export default ProductCard;