import React, { useState } from "react";

import WindowModal from "../../layouts/window-modal/WindowModal";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import MenuPanel from "./components/MenuPanel/MenuPanel";
import FiltersPanel from "./components/ProductsPanel/FiltersPanel";

import { postGenreAsync, updateGenreAsync } from "../../api/products/filters/genres.api";
import { postDeveloperAsync, updateDeveloperAsync } from "../../api/products/filters/developers.api";
import { postPlatformAsync, updatePlatformAsync } from "../../api/products/filters/platforms.api";
import { postTypeProductAsync, updateTypeProductAsync } from "../../api/products/filters/type_products.api";

import './Account.scss';

function Account() {
    const [isShowWindow, setIsShowWindow] = useState<boolean>(false);
    const [windowSetting, setWindowSetting]
        = useState<{ 
            headerName: "Genres" | "Platforms" | "Type Products" | "Developers" | null, 
            value: string | null,
            method: "POST" | "UPDATE" | null
        }>({
            headerName: null,
            value: null,
            method: null
        });

    const [fields, setFields] = useState<{
        name: string
    }>({ name: "" });

    const [menuPanelSwither, setMenuPanelSwither] 
        = useState<"Accounts" | "Filters" | "Products">("Accounts");

    const onSetWindowAdd = (headerName: "Genres" | "Platforms" | "Type Products" | "Developers") => {
        setWindowSetting({
            ...windowSetting,
            headerName: headerName,
            method: "POST"
        });

        setFields({ name: "" });

        setIsShowWindow(true);
    }

    const onSetWindowUpdate = (headerName: "Genres" | "Platforms" | "Type Products" | "Developers", value: string) => {
        setWindowSetting({
            ...windowSetting,
            headerName: headerName,
            value: value,
            method: "UPDATE"
        });

        setFields({ name: value });

        setIsShowWindow(true);
    }

    const onPostAsync = async () => {
        switch(windowSetting.headerName){
            case "Genres":
                await postGenreAsync(fields);
                break;
            case "Developers":
                await postDeveloperAsync(fields);
                break;
            case "Platforms":
                await postPlatformAsync(fields);
                break;
            case "Type Products":
                await postTypeProductAsync(fields);
                break;
            default:
                throw new DOMException("Incorect type name");
        }
    }

    const onUpdateAsync = async () => {
        switch(windowSetting.headerName){
            case "Genres":
                await updateGenreAsync(windowSetting.value!, fields);
                break;
            case "Developers":
                await updateDeveloperAsync(windowSetting.value!, fields);
                break;
            case "Platforms":
                await updatePlatformAsync(windowSetting.value!, fields);
                break;
            case "Type Products":
                await updateTypeProductAsync(windowSetting.value!, fields);
                break;
            default:
                throw new DOMException("Incorect type name");
        }
    }

    const getWindowModal = () => {
        const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;

            const updatedForm = {
                ...fields,
                [name]: value,
            };

            setFields(updatedForm);
        }

        return <WindowModal
            headerName={windowSetting.headerName!}
            iconHead={undefined}
            onClick={() => setIsShowWindow(false)}>
            <div className="admin-panel__window">
                <div className="admin-panel__window-inputs">
                    <Input
                        onChange={onHandleChange}
                        value={fields.name}
                        name="name"
                        type="text"
                        placeHolder={"name".toLocaleUpperCase()} />
                </div>
                <div className="admin-panel__window-button">
                    {windowSetting.method === "POST" &&                    
                        <Button type="submit" onClick={onPostAsync}>Добавить</Button>
                    }
                    {windowSetting.method === "UPDATE" &&                    
                        <Button type="submit" onClick={onUpdateAsync}>Обновить</Button>
                    }
                </div>
            </div>
        </WindowModal>
    }

    return (
        <div className="admin-panel">
            {isShowWindow === true && getWindowModal()}
            <div className="admin-panel__in">
                <div className="admin-panel__header">
                    <h1 style={{ color: 'black' }}>Admin Panel</h1>
                </div>
                <div className="admin-panel__operations">
                    <MenuPanel value={menuPanelSwither} onClick={setMenuPanelSwither} />
                    <FiltersPanel onSetWundowUpdate={onSetWindowUpdate} onSetWindowSetting={onSetWindowAdd} />
                </div>
            </div>
        </div>
    )
}

export default Account;