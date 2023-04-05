import React from "react";
import { ReactComponent as UsersIcon } from "../../../../assets/icons/user_icon.svg";
import { ReactComponent as MenuIcon } from "../../../../assets/icons/menu_icon.svg";

import './MenuPanel.scss';

function MenuPanel({value, onClick}:{value: "Accounts" | "Filters"| "Products" ,onClick: (value: "Accounts" | "Filters"| "Products")=>void}){
    return (
        <div className="menu-panel">
            <button type="button" className={value === "Accounts"? "active" : "no-active"}
            onClick={() => onClick("Accounts")}>
                <UsersIcon height={50} />
            </button>
            <button type="button" className={value === "Filters"? "active" : "no-active"}
            onClick={() => onClick("Filters")}>
                <MenuIcon height={50} width={50} />
            </button>
        </div>
    )
}

export default MenuPanel;