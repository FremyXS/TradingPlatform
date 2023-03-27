import React, { useState } from "react";
import WindowModal from "../../../window-modal/WindowModal";
import { ReactComponent as UserIcon } from '../../../../assets/icons/user_icon.svg'
import ButtonSwitcher from "../../../../components/ButtonSwitcher/ButtonSwitcher";

import Input from "../../../../components/Input/Input";
import { AccountLoginData, AccountRegisterData, UserToken } from "../../../../types";
import Switcher from "../../../../components/Switcher/Switcher";

import './AccountWindow.scss';
import Button from "../../../../components/Button/Button";
import { loginAsync } from "../../../../api/auth";

function AccountWindow({setToken, setShowAccountModal }: { setToken: (userToken: UserToken) => void, setShowAccountModal: () => void }) {
    const [switherAccount, setSwitherAccount] = useState(0);
    const [accountRegisterData, setAccountRegisterData] = useState<AccountRegisterData>({
        name: "",
        email: "",
        password: "",
        password_confirm: ""
    });


    const [accountLoginData, setAccountLoginData] = useState<AccountLoginData>({
        email: "",
        password: "",
    });

    const handleAccountRegisterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const updatedForm: AccountRegisterData = {
            ...accountRegisterData,
            [name]: value,
        };

        setAccountRegisterData(updatedForm);
    };

    const handleAccountLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const updatedForm: AccountLoginData = {
            ...accountLoginData,
            [name]: value,
        };

        setAccountLoginData(updatedForm);
    };


    const onLoginHandleAsync = async () => {
        const { data } = await loginAsync(accountLoginData);
        setToken(data);
    }
    return (
        <WindowModal headerName="аккаунт"
            iconHead={<UserIcon height={40} />}
            onClick={setShowAccountModal}
        >
            <div className="account-window">
                <div className="account-window__head">
                    <Switcher>
                        <ButtonSwitcher
                            isChecked={switherAccount === 0}
                            onClick={() => setSwitherAccount(0)}>
                            Регистрация
                        </ButtonSwitcher>
                        <ButtonSwitcher
                            isChecked={switherAccount === 1}
                            onClick={() => setSwitherAccount(1)}>
                            Вход
                        </ButtonSwitcher>
                    </Switcher>
                </div>
                {switherAccount === 0 &&
                    <>
                        <div className="account-window__content">
                            <Input value={accountRegisterData.name}
                                placeHolder={"name"}
                                type="text"
                                name="name"
                                onChange={handleAccountRegisterChange}
                            />
                            <Input value={accountRegisterData.email}
                                placeHolder={"email"}
                                type="email"
                                name="email"
                                onChange={handleAccountRegisterChange}
                            />
                            <Input value={accountRegisterData.password}
                                placeHolder={"password"}
                                type="password"
                                name="password"
                                onChange={handleAccountRegisterChange}
                            />
                            <Input value={accountRegisterData.password_confirm}
                                placeHolder={"password confirm"}
                                type="password"
                                name="password_confirm"
                                onChange={handleAccountRegisterChange}
                            />
                        </div>
                        <div className="account-window__button">
                            <Button type="submit">Регистрация</Button>
                        </div>
                    </>
                }
                {switherAccount === 1 &&
                    <>
                        <div className="account-window__content">
                            <Input value={accountLoginData.email}
                                placeHolder={"email"}
                                type="email"
                                name="email"
                                onChange={handleAccountLoginChange}
                            />
                            <Input value={accountLoginData.password}
                                placeHolder={"password"}
                                type="password"
                                name="password"
                                onChange={handleAccountLoginChange}
                            />
                        </div>
                        <div className="account-window__button">
                            <Button type="submit" onClick={onLoginHandleAsync}>Вход</Button>
                        </div>
                    </>
                }
            </div>
        </WindowModal>
    )
}

export default AccountWindow;