import React, { ReactNode, useEffect, useRef, useState } from "react";

import './DropDown.scss'

interface DropDownType {
    values: { name: string, onClick: () => void }[],
    children: ReactNode
}

function DropDown({ values, children }: DropDownType) {
    const container = useRef<HTMLDivElement|null>(null);
    const [dropdownState, setDropdownState] = useState<boolean>(false);

    const handleDropdownClick = () =>
        setDropdownState(!dropdownState);

    const handleClickOutside = (e: any) => {
        if (container.current && !container.current.contains(e.target)) {
            setDropdownState(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        // optionally returning a func in useEffect runs like componentWillUnmount to cleanup
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="drop-down" ref={container}>
            <button
                className="drop-down__button"
                type="button"
                onClick={handleDropdownClick}
            >
                {children}
            </button>
            {dropdownState &&
                <div className="drop-down__list">
                    <ul>
                        {values.map((el, index) =>
                            <li onClick={el.onClick} key={index}>{el.name}</li>
                        )}
                    </ul>
                </div>
            }
        </div>
    );
}

export default DropDown;