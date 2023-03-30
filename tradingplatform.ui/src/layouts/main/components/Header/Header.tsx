import React from "react";

import { ReactComponent as CartIcon } from '../../../../assets/icons/shopping-cart.svg';
import { ReactComponent as UserIcon } from '../../../../assets/icons/user_icon.svg';
import { ReactComponent as LogoIcon } from '../../../../assets/icons/logo.svg';

import './Header.scss';
import { Link } from "react-router-dom";

function Header({ onClickCart, onClickAccount }: { onClickCart: () => void, onClickAccount: () => void }) {
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
                <UserIcon
                    height={40}
                    onClick={onClickAccount} />
            </div>
        </div>
    )
}

export default Header;