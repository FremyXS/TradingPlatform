import React, { useEffect, useState } from "react";

import PanelRow from "../ProductsPanel/component/PanelRow/PanelRow";
import Switcher from "../../../../components/Switcher/Switcher";
import ButtonSwitcher from "../../../../components/ButtonSwitcher/ButtonSwitcher";
import Button from "../../../../components/Button/Button";

import { UserProfileType } from "../../../../types";
import { getAllUsers } from "../../../../api/user";

import './AccountsPanel.scss';

interface AccountsPanel{
    onSetWindowSetting: 
        (headerName: 'Account') => void,
}

function AccountsPanel({onSetWindowSetting}: AccountsPanel) {
    const [users, setUsers] = useState<UserProfileType[]>([]);

    useEffect(() => {
        loadUsersAsync();
    }, []);

    return (
        <div className="accounts-panel">
            <Switcher>
                <ButtonSwitcher isChecked={false}>
                    Пользователи
                </ButtonSwitcher>
                <ButtonSwitcher isChecked={false}>
                    Продавцы
                </ButtonSwitcher>
            </Switcher>
            <div className="accounts-panel__content">
                <Button type="button" onClick={()=>onSetWindowSetting('Account')}>
                    Добавить
                </Button>
                <div className="accounts-panel__content-data">
                    {
                        users.map((value, index) =>
                            <PanelRow key={index}
                                title={value.name} />
                        )
                    }
                </div>
            </div>
        </div>
    );

    async function loadUsersAsync() {
        const { data } = await getAllUsers();
        setUsers(data);
    }
}

export default AccountsPanel;