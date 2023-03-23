import React, { ReactNode } from "react";

import { ReactComponent as ExitIcon } from '../../assets/icons/exit_icon.svg';

import './WindowModal.scss';

type WindowModalType = {
    headerName: string, 
    iconHead: ReactNode,
    onClick: () => void
}

function WindowModal({headerName, iconHead, onClick}:WindowModalType){
    return (
        <div className="window-modal">
            <div className="window-modal__in">
                <div className="window-modal__in-header">
                    {iconHead}
                    <h1>{headerName}</h1>
                    <span>
                        <ExitIcon height={40} 
                        onClick={onClick}/>
                    </span>
                </div>
                <div className="window-modal__in-content">
            
                </div>
            </div>
        </div>
    )
}

export default WindowModal;