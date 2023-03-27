import React, { ReactNode } from "react";
import './ButtonSwitcher.scss';

function ButtonSwitcher({isChecked = false, onClick, children}:{isChecked: boolean, onClick?:()=>void, children: ReactNode}){
    return (
        <div className="switcher-button">
            <button className={`${isChecked? "active" : "no-active"}`} type="button" onClick={onClick}>
                {children}
            </button>
        </div>
    );
}

export default ButtonSwitcher;