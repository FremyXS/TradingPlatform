import React, { ReactNode } from "react";

import './Button.scss';

type ButtonType = {
    type: "button" | "submit" | "reset", 
    children?: ReactNode,
    onClick?: () => void,
}

function Button({type, children, onClick}: ButtonType){
    return(
        <div className="component-button">
            <button type={type}
            onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button;