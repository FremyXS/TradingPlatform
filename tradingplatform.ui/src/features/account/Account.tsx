import React, { useEffect, useState } from "react";
import { getProfileAsync } from "../../api/auth";
import { createAuthProvider } from "../../halpers/createAuthProvider";

import ProductsPanel from "./components/ProductsPanel/ProductsPanel";

import './Account.scss';

function Account() {
    const[userData, setUserData] = useState({});
    const authProvider = createAuthProvider();

    useEffect(()=>{
        loadUserDataAsync();
    }, [])

    return (
        <div className="admin-panel">
            <div className="admin-panel__in"> 
                <div className="admin-panel__header">
                    <h1 style={{color: 'black'}}>Account</h1>
                </div>
                <ProductsPanel />
            </div>
        </div>
    )
    
    async function loadUserDataAsync() {
        const headers = await authProvider.authHeader();
        const {data} = await getProfileAsync(headers);
        setUserData(data);
    }

}

export default Account;