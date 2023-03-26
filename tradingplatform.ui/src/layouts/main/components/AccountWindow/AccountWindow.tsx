import React, { useState } from "react";
import WindowModal from "../../../window-modal/WindowModal";
import { ReactComponent as UserIcon } from '../../../../assets/icons/user_icon.svg'
import ButtonSwitcher from "../../../../components/ButtonSwitcher/ButtonSwitcher";

import Input from "../../../../components/Input/Input";
import './AccountWindow.scss';
import { AccountCred } from "../../../../types";

function AccountWindow({ setShowAccountModal }: { setShowAccountModal: () => void }) {
    const [switherAccount, setSwitherAccount] = useState(0);
    const [accountData, setaAccountData] = useState<AccountCred>({
        login: "",
        email: "",
        password: "",
        password_confirm: ""
    });

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const updatedForm: AccountCred = {
            ...accountData,
            [name]: value,
        };

        setaAccountData(updatedForm);
    };

    return (
        <WindowModal headerName="аккаунт"
            iconHead={<UserIcon height={40} />}
            onClick={setShowAccountModal}
        >
            <div className="account-window">
                <div className="account-window__head">
                    <ButtonSwitcher
                        onClick={() => setSwitherAccount(0)}>
                        Регистрация
                    </ButtonSwitcher>
                    <ButtonSwitcher
                        onClick={() => setSwitherAccount(1)}>
                        Вход
                    </ButtonSwitcher>
                </div>
                <div className="account-window__content">
                    {switherAccount === 0 &&
                        <>
                            <Input value={accountData.login}
                                placeHolder={"login"}
                                type="text"
                                name="login"
                                onChange={handleFormChange}
                            />
                            <Input value={accountData.email}
                                placeHolder={"email"}
                                type="email"
                                name="email"
                                onChange={handleFormChange}
                            />
                            <Input value={accountData.password}
                                placeHolder={"password"}
                                type="password"
                                name="password"
                                onChange={handleFormChange}
                            />
                            <Input value={accountData.password_confirm}
                                placeHolder={"password confirm"}
                                type="password"
                                name="password_confirm"
                                onChange={handleFormChange}
                            />
                        </>}
                    {switherAccount === 1 &&
                        <>
                            <Input value={accountData.email}
                                placeHolder={"email"}
                                type="email"
                                name="email"
                                onChange={handleFormChange}
                            />
                            <Input value={accountData.password}
                                placeHolder={"password"}
                                type="password"
                                name="password"
                                onChange={handleFormChange}
                            />
                        </>}
                </div>
            </div>
        </WindowModal>
    )
}

export default AccountWindow;