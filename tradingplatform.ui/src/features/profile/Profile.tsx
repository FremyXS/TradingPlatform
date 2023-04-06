import React, { useEffect, useState } from "react";

import { UserProfileType} from "../../types";
import {roles} from "../../types/index.d";
import { getProfileAsync } from "../../api/auth";
import { createAuthProvider } from "../../halpers/createAuthProvider";

import ProductsSetting from "./components/ProductsSetting/ProductsSetting";

import './Profile.scss';

function Profile() {
    const authProvider = createAuthProvider();
    const [user, setUser] = useState<UserProfileType>({
        id: 0,
        name: "",
        email: "",
        email_verified_at: "",
        address: "",
        role: ""
    });

    useEffect(() => {
        loadProfileAsync();
    }, [])

    return (
        <div className="profile">
            <div className="profile-in">
                <div className="profile-head">
                    <div className="profile-head__title">
                        <h1 style={{ color: 'black' }}>{user.name.toLocaleUpperCase()}</h1>
                        <p>{user.role}</p>
                    </div>
                    <div className="profile-head__description">
                        <p>{user.email} ({user.email_verified_at ? 'Потверждён' : 'Не потверждён'})</p>
                        <p>{user.address && user.address}</p>
                    </div>
                </div>
                <div className="profile-main">
                    {authProvider.getRole && authProvider.getRole() === roles.seller && 
                        <ProductsSetting idUser={user.id}/>
                    }
                </div>
            </div>
        </div>
    );

    async function loadProfileAsync() {
        const authProvider = createAuthProvider();
        const [headers] = await authProvider.authHeader();
        const { data } = await getProfileAsync(headers);
        console.log(data);
        setUser(data);
    }
}

export default Profile;