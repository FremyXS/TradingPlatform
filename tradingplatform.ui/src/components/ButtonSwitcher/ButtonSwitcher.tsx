import React, { ReactNode } from "react";
import './ButtonSwitcher.scss';

function ButtonSwitcher({onClick, children}:{onClick?:()=>void, children: ReactNode}){
    return (
        <div className="button-switcher">
            <button type="button" onClick={onClick}>
                {children}
            </button>
        </div>
    );
}

export default ButtonSwitcher;