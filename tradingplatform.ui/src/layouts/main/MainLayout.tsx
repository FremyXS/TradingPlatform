import React, { ReactNode, useState } from "react";
import WindowModal from "../window-modal/WindowModal";
import Header from "./components/Header/Header";

import { ReactComponent as CartIcon } from '../../assets/icons/shopping-cart.svg';

function MainLayout({children}:{children:ReactNode}){    
    const [showCartModal, setShowCartModal] = useState(false);
    
    return(
        <div>
            {showCartModal && 
            <WindowModal headerName="корзина"
                iconHead={<CartIcon height={40}/>} 
                onClick={() => setShowCartModal(false)}
            />}
            <Header onClick={() => setShowCartModal(true)}/>
            {children}
        </div>
    );
}

export default MainLayout;