import React from "react";

import { ReactComponent as CartIcon } from '../../../../assets/icons/shopping-cart.svg';

import './Header.scss';

function Header( {onClick} : {onClick: () => void} ){
    return(
        <div className="header">
            <div className="header-in">
                <CartIcon
                height={40}
                onClick={onClick} />
            </div>
        </div>
    )
}

export default Header;