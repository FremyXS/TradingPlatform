import React, { useEffect, useState } from "react";

import ProductsPanel from "./components/ProductsPanel/ProductsPanel";
import WindowModal from "../../layouts/window-modal/WindowModal";

import Input from "../../components/Input/Input";

import './Account.scss';
import Button from "../../components/Button/Button";

function Account() {
    const [isShowWindow, setIsShowWindow] = useState<boolean>(false);
    const [windowSetting, setWindowSetting]
        = useState<{ headerName: string, category: "filters" | "products", onButtonSubmit: (body: {name: string}) => void }>({
            headerName: "",
            category: "products",
            onButtonSubmit: () => { },
        });

    const [fields, setFields] = useState<{
        name: string
    }>({ name: "" });

    useEffect(() => {
    }, [])

    const onSetWindowSetting = (headerName: string, onButtonSubmit: (body: any) => void, category: "filters" | "products") => {
        setWindowSetting({
            headerName: headerName,
            category: category,
            onButtonSubmit: onButtonSubmit
        });

        setFields({ name: "" });

        setIsShowWindow(true);
    }

    const getWindowModal = () => {
        console.log(fields);


        const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;

            const updatedForm = {
                ...fields,
                [name]: value,
            };

            setFields(updatedForm);

        }

        return <WindowModal
            headerName={windowSetting.headerName}
            iconHead={undefined}
            onClick={() => setIsShowWindow(false)}>
            <div className="admin-panel__window">
                <div className="admin-panel__window-inputs">
                    {windowSetting.category === "products" &&
                        <Input
                            value=""
                            name="title"
                            type="text"
                            placeHolder={"name".toLocaleUpperCase()} />
                    }
                    {windowSetting.category === "filters" &&
                        <Input
                            onChange={onHandleChange}
                            value={fields.name}
                            name="name"
                            type="text"
                            placeHolder={"name".toLocaleUpperCase()} />
                    }
                </div>
                <div className="admin-panel__window-button">
                    <Button type="submit" onClick={() => windowSetting.onButtonSubmit(
                        fields
                    )!}>Добавить</Button>
                </div>
            </div>
        </WindowModal>
    }

    return (
        <div className="admin-panel">
            {isShowWindow === true && getWindowModal()}
            <div className="admin-panel__in">
                <div className="admin-panel__header">
                    <h1 style={{ color: 'black' }}>Account</h1>
                </div>
                <ProductsPanel onSetWindowSetting={onSetWindowSetting} />
            </div>
        </div>
    )
}

export default Account;