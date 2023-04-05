import React from "react";

import { ReactComponent as CartIcon } from '../../../../assets/icons/shopping-cart.svg';
import { ReactComponent as UserIcon } from '../../../../assets/icons/user_icon.svg';
import { ReactComponent as LogoIcon } from '../../../../assets/icons/logo.svg';

import { Link } from "react-router-dom";

import DropDown from "../../../../components/DropDown/DropDown";
import { roles } from "../../../../types/index.d";

import './Header.scss';

interface HeaderType {
    logged: boolean,
    role: string | null,
    onClickCart: () => void,
    onClickAccount: () => void,
    onClickLogaout?: () => void,
    onClickToHome?: () => void,
    onClickToProfile?:()=>void
}

function Header({ logged, role, onClickCart, onClickAccount, onClickLogaout, onClickToHome, onClickToProfile }: HeaderType) {



    return (
        <div className="header">
            <div className="header-in">
                <LogoIcon height={70} onClick={onClickToHome}/>
                <nav className="header-in__menu">
                    <Link to="/catalog">
                        <h4>Каталог</h4>
                    </Link>
                </nav>
                <CartIcon
                    height={40}
                    onClick={onClickCart} />
                {logged &&
                    <DropDown
                        values={
                            role && role === roles.admin?
                            [
                                { name: "Панель Аккаунт", onClick: onClickAccount },
                                { name: "Профиль", onClick: onClickToProfile!},
                                { name: "Выйти", onClick: onClickLogaout! }
                            ]
                            :
                            [
                                { name: "Профиль", onClick: onClickToProfile!},
                                { name: "Выйти", onClick: onClickLogaout! }
                            ]
                        }
                    >
                        <div className="account-info">
                            <span></span>
                            <UserIcon
                                height={40} />
                        </div>
                    </DropDown>
                }
                {!logged &&
                    <UserIcon
                        height={40}
                        onClick={onClickAccount} />
                }
            </div>
        </div >
    )
}

export default Header;