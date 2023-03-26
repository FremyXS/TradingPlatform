import React from "react";

import './Input.scss';

interface InputType {
    value?: string,
    name?: string,
    type?: string,
    placeHolder?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ value, name, type, placeHolder, onChange }: InputType) {
    return (
        <div className="input-component">
            <input onChange={onChange} value={value} name={name} type={type} placeholder={placeHolder} />
        </div>
    )
}

export default Input;