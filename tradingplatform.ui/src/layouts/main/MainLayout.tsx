import React, { ReactNode, useState } from "react";
import WindowModal from "../window-modal/WindowModal";
import Header from "./components/Header/Header";

import { ReactComponent as UserIcon } from '../../assets/icons/user_icon.svg'

import CartWindow from "./components/CartWindow/CartWindow";
import './MainLayout.scss';
import AccountWindow from "./components/AccountWindow/AccountWindow";
import useToken from "../../halpers/useToken";
import { UserToken } from "../../types";

function MainLayout({ children }: { children: ReactNode }) {
    const [showCartModal, setShowCartModal] = useState(false);
    const [showAccountModal, setShowAccountModal] = useState(false);
    const { token, setToken } = useToken();

    return (
        <div>
            {showCartModal &&
                <CartWindow setShowCartModal={()=>setShowCartModal(false)}/>
            }
            {showAccountModal &&
                <AccountWindow setToken={(userToken: UserToken) => setToken(userToken)} setShowAccountModal={()=>setShowAccountModal(false)} />
            }
            <Header
                onClickCart={() => setShowCartModal(true)}
                onClickAccount={() => setShowAccountModal(true)} />
            {children}
        </div>
    );
}

export default MainLayout;