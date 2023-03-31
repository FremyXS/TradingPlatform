import { useEffect, useState } from "react";
import createTokenProvider from "./createTokenProvider";

export const createAuthProvider = () => {
    const tokenProvider = createTokenProvider();
    const login: typeof tokenProvider.setToken = (newTokens) => {
        tokenProvider.setToken(newTokens);
    }

    const logout = () => {
        tokenProvider.setToken(null);
    }

    const authHeader = async () => {
        const token = await tokenProvider.getToken();
        console.log(token);
        if(token){
            return { Authorization: 'Bearer ' + token };
        }
        else{
            return {};
        }
    }

    const useAuth = () => {
        const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn());

        useEffect(() => {
            const listener = (newIsLogged: boolean) => {
                setIsLogged(newIsLogged);
            };

            tokenProvider.subscribe(listener);
            return () => {
                tokenProvider.unsubscribe(listener);
            };
        }, []);

        return [isLogged] as [typeof isLogged];
    };

    return {
        useAuth,
        authHeader,
        login,
        logout
    }
}