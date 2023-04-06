import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Button from "../../../../components/Button/Button";
import { CartProductData, OrderType } from "../../../../types";
import WindowModal from "../../../window-modal/WindowModal";

import { ReactComponent as ArrowRight } from '../../../../assets/icons/arrow_right.svg'
import { ReactComponent as ArrowLeft } from '../../../../assets/icons/arrow_left.svg';
import { ReactComponent as CartIcon } from '../../../../assets/icons/shopping-cart.svg';
import { ReactComponent as Trash } from '../../../../assets/icons/trash.svg';

import { postOrdersAsync } from "../../../../api/orders.api";
import { getProfileAsync } from "../../../../api/auth";
import { createAuthProvider } from "../../../../halpers/createAuthProvider";

import './CartWindow.scss'

function CartWindow({ setShowCartModal }: { setShowCartModal: () => void }) {
    const [cookies, setCookie] = useCookies(['cart']);
    const [orders, setOrders] = useState<OrderType[]>([]);
    const [buyerId, setBuyerId] = useState<number>(0);

    useEffect(()=>{
        loadUserAsync();
    }, [buyerId])

    async function loadUserAsync(){
        const authProvider = createAuthProvider();
        const [headers] = await authProvider.authHeader();
        const {data} = await getProfileAsync(headers);
        setBuyerId(data.id);
    }

    function onGetProductCart(cartProductData: CartProductData, index: number) {
        setOrders([...orders, {
            product_id: cartProductData.id,
            buyer_id: buyerId,
            seller_id: cartProductData.seller_id,
            status: ""
        }])

        return (
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

    function onDeleteProductFromCart(idProduct: number) {
        setCookie('cart',
            JSON.stringify(
                [...cookies.cart.slice(0, idProduct),
                ...cookies.cart.slice(idProduct + 1)]
            ),
            { path: '/' });
    }

    function onChangeCount(idProduct: number, num: number) {
        setCookie('cart',
            JSON.stringify(
                [...cookies.cart.slice(0, idProduct),
                {
                    ...cookies.cart[idProduct] as CartProductData,
                    ['count']: cookies.cart[idProduct]['count'] + num
                },
                ...cookies.cart.slice(idProduct + 1)]
            ),
            { path: '/' });
    }

    async function onBuyClick() {
        // await postOrdersAsync(orders);
    }

    return (
        <WindowModal headerName="корзина"
            iconHead={<CartIcon height={40} />}
            onClick={setShowCartModal}>
            <div className="cart">
                <div className="cart-list">
                    {cookies.cart.map((el: CartProductData, index: number) =>
                        el && onGetProductCart(el, index)
                    )}
                </div>
                <div className="cart-button">
                    <Button onClick={() => onBuyClick}
                        type="submit">
                        Заказать
                    </Button>
                </div>
            </div>
        </WindowModal>
    )
}

export default CartWindow;