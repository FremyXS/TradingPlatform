import React, { ReactNode } from "react";

import './Button.scss';

function Button({type, children}:{type: "button" | "submit" | "reset", children?: ReactNode}){
    return(
        <div className="component-button">
            <button type={type}>
                {children}
            </button>
        </div>
    )
}

export default Button;