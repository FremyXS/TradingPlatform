import React, { useState } from "react";

import Switcher from "../../../../components/Switcher/Switcher";
import ButtonSwitcher from "../../../../components/ButtonSwitcher/ButtonSwitcher";

import Button from "../../../../components/Button/Button";
import { FilterType, ProducType } from "../../../../types"
import { getProductsAsync } from "../../../../api/product";

import './ProductsPanel.scss';

function ProductsPanel() {
    const [switherAccount, setSwitherAccount] = useState(0);
    const [content, setContent] = useState<ProducType[] | FilterType[]>([]);

    async function loginProductAsync() {
        setSwitherAccount(0);
        const { data } = await getProductsAsync();
        setContent(data);
    }

    return (
        <div className="products-panel">
            <Switcher>
                <ButtonSwitcher
                    isChecked={switherAccount === 0}
                    onClick={() => loginProductAsync()}>
                    Товары
                </ButtonSwitcher>
                <ButtonSwitcher
                    isChecked={switherAccount === 1}
                    onClick={() => setSwitherAccount(1)}>
                    Жанры
                </ButtonSwitcher>
                <ButtonSwitcher
                    isChecked={switherAccount === 2}
                    onClick={() => setSwitherAccount(2)}>
                    Платформы
                </ButtonSwitcher>
                <ButtonSwitcher
                    isChecked={switherAccount === 3}
                    onClick={() => setSwitherAccount(3)}>
                    Типы
                </ButtonSwitcher>
                <ButtonSwitcher
                    isChecked={switherAccount === 4}
                    onClick={() => setSwitherAccount(4)}>
                    Разработчики
                </ButtonSwitcher>
                <ButtonSwitcher
                    isChecked={switherAccount === 5}
                    onClick={() => setSwitherAccount(5)}>
                    Аккаунты
                </ButtonSwitcher>
            </Switcher>
            <div className="products-panel__content">
                <Button type={"button"}>
                    Добавить
                </Button>
                <div className="products-panel__content-data" >
                    {switherAccount === 0 &&
                        content.map((value, index)=>
                            <div key={index}>{(value as ProducType).title}</div>
                        )
                    }
                </div>

            </div>
        </div>
    );


}

export default ProductsPanel;