import React, { ReactNode } from "react";

import './FilterCard.scss';

function FilterCard({title, children}:{title: string, children:ReactNode}){
    return(
        <div className="filter-card">
            <div className="filter-card__title">
                <p>{title}</p>
            </div>
            <div className="filter-card__contet">
                {children}
            </div>
        </div>
    )
}

export default FilterCard;