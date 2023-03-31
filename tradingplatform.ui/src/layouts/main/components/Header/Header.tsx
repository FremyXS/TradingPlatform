import React from "react";

import { ReactComponent as CartIcon } from '../../../../assets/icons/shopping-cart.svg';
import { ReactComponent as UserIcon } from '../../../../assets/icons/user_icon.svg';
import { ReactComponent as LogoIcon } from '../../../../assets/icons/logo.svg';

import { Link } from "react-router-dom";

import './Header.scss';
import DropDown from "../../../../components/DropDown/DropDown";

function Header({ logged, onClickCart, onClickAccount, onClickLogaout }: { logged: boolean, onClickCart: () => void, onClickAccount: () => void, onClickLogaout? : () => void }) {

    return (
        <div className="header">
            <div className="header-in">
                <LogoIcon height={70} />
                <nav>
                    <Link to="/catalog">Каталог</Link>
                </nav>
                <CartIcon
                    height={40}
                    onClick={onClickCart} />
                {logged &&
                    <DropDown
                        values={[
                            {name: "Панель Аккаунт", onClick: onClickAccount},
                            { name: "Выйти", onClick: onClickLogaout! } 
                        ]}
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