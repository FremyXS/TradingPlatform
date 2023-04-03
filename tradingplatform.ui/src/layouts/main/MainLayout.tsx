import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header/Header";
import CartWindow from "./components/CartWindow/CartWindow";
import AccountWindow from "./components/AccountWindow/AccountWindow";
import { UserToken } from "../../types";
import { createAuthProvider } from "../../halpers/createAuthProvider";

import './MainLayout.scss';

function MainLayout({ children }: { children: ReactNode }) {
    const [showCartModal, setShowCartModal] = useState(false);
    const [showAccountModal, setShowAccountModal] = useState(false);
    const authProvider= createAuthProvider();
    const [logged] = authProvider.useAuth();
    const navigate = useNavigate();

    return (
        <div>
            {showCartModal &&
                <CartWindow setShowCartModal={() => setShowCartModal(false)} />
            }
            {showAccountModal && !logged &&
                <AccountWindow setToken={(userToken: UserToken) => authProvider.login(userToken)} setShowAccountModal={() => setShowAccountModal(false)} />
            }
            <Header
                role={authProvider.getRole()}
                logged={logged}
                onClickCart={() => setShowCartModal(true)}
                onClickAccount={() => logged? navigate('/account') :setShowAccountModal(true)} 
                onClickLogaout={() => authProvider.logout()}
                onClickToHome={()=>navigate('/')}/>
            {children}
        </div>
    );
}

export default MainLayout;