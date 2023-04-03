import React from "react";
import { ReactComponent as TrashIcon } from "../../../../../../assets/icons/trash.svg";
import { ReactComponent as MenuIcon } from "../../../../../../assets/icons/menu_icon.svg";

import './PanelRow.scss';

function PanelRow({title}:{title: string}){
    return (
        <div className="panel-row">
            <MenuIcon height={40} width={40} />
            <p>
                {title}
            </p>
            <TrashIcon height={40} />
        </div>
    );
}

export default PanelRow;