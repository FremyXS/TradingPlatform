import React, { ReactNode } from "react";

import ButtonSwitcher from '../ButtonSwitcher/ButtonSwitcher';
import './Switcher.scss';

function Switcher({children}:{children: ReactNode}){
    return (
        <div className="switcher">
            {children}
        </div>
    )
}

export default Switcher;