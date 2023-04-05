import React from "react";
import { ReactComponent as TrashIcon } from "../../../../../../assets/icons/trash.svg";
import { ReactComponent as MenuIcon } from "../../../../../../assets/icons/menu_icon.svg";

import './PanelRow.scss';

interface PanelRowType{
    title: string, 
    onClickDelete?: () => void,
    onClickUpdate?: () => void
}

function PanelRow({title, onClickDelete, onClickUpdate}:PanelRowType){
    return (
        <div className="panel-row">
            <MenuIcon height={40} width={40} onClick={onClickUpdate}/>
            <p>
                {title}
            </p>
            <TrashIcon height={40} onClick={onClickDelete}/>
        </div>
    );
}

export default PanelRow;