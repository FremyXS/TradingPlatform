import React, { ReactNode, useState } from "react";
import WindowModal from "../window-modal/WindowModal";
import Header from "./components/Header/Header";

import { ReactComponent as CartIcon } from '../../assets/icons/shopping-cart.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_right.svg';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow_left.svg';
import { ReactComponent as Trash } from '../../assets/icons/trash.svg';
import { useCookies } from "react-cookie";
import { CartProductData } from "../../types";

import Button from "../../components/Button/Button";

import './MainLayout.scss';

function MainLayout({children}:{children:ReactNode}){    
    const [showCartModal, setShowCartModal] = useState(false);
    const [cookies, setCookie] = useCookies(['cart']);

    function onDeleteProductFromCart(idProduct: number){
        setCookie('cart', 
        JSON.stringify(
            [...cookies.cart.slice(0, idProduct),
                 ...cookies.cart.slice(idProduct+1)]
            ),
        { path: '/' });
    }

    function onChangeCount(idProduct: number, num: number){
        setCookie('cart', 
        JSON.stringify(
            [...cookies.cart.slice(0, idProduct),
                {
                    ...cookies.cart[idProduct] as CartProductData,
                    ['count']: cookies.cart[idProduct]['count'] + num
                },
                 ...cookies.cart.slice(idProduct+1)]
            ),
        { path: '/' });
    }
    
    function onGetProductCart(cartProductData: CartProductData, index: number){
        return(
            <div key={index} className="cart-list__product">
                <div className="cart-list__product-title">{cartProductData.title}</div>
                <div>{cartProductData.price}</div>
                <div className="cart-list__product-count">
                    <ArrowLeft height={20}
                    onClick={() => onChangeCount(index, -1)} />
                    <span>{cartProductData.count}</span>
                    <ArrowRight height={20}
                    onClick={() => onChangeCount(index, 1)} /> 
                </div>
                <div>{cartProductData.price * cartProductData.count}</div>
                <Trash height={40} 
                onClick={() => onDeleteProductFromCart(index)}
                />
            </div>
        )
    }

    return(
        <div>
            {showCartModal && 
                <WindowModal headerName="корзина"
                    iconHead={<CartIcon height={40}/>} 
                    onClick={() => setShowCartModal(false)}>
                        <div className="cart">
                            <div className="cart-list">
                                {cookies.cart.map((el: CartProductData, index: number) => 
                                    el && onGetProductCart(el, index)
                                )}
                            </div>
                            <div className="cart-button">
                                <Button type="submit">
                                    Заказать
                                </Button>
                            </div>
                        </div>
                </WindowModal>
                }
            <Header onClick={() => setShowCartModal(true)}/>
            {children}
        </div>
    );    
}

export default MainLayout;