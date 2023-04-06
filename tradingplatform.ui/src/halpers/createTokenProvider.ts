import { refreshTokenAsync } from '../api/auth';
import { UserToken } from '../types';

export default function createTokenProvider() {
    let _token: UserToken | null
        = JSON.parse(localStorage.getItem('user') as string) || null;

    const getToken = async (headers?: { Authorization: string; } | { Authorization?: undefined; }) => {
        if (!_token) {
            return null;
        }

        if (isExpired(getExpirationDate(_token.access_token))) {
            const { data: updatedToken } = await refreshTokenAsync(headers);
            setToken(updatedToken);
        }

        return _token && _token.access_token;
    };

    const getRole = () => {
        return _token && _token.role;
    }


    const setToken = (token: UserToken | null) => {
        if (token) {
            localStorage.setItem('user', JSON.stringify(token));
        } else {
            localStorage.removeItem('user');
        }
        _token = token;
        notify();
    };

    const getExpirationDate = (jwtToken?: string): number | null => {
        if (!jwtToken) {
            return null;
        }

        //    console.log( atob(jwtToken.split('.')[1]))
        // const buf = Buffer.from(jwtToken.split('.')[1], 'base64')
        const jwt = JSON.parse(atob(jwtToken.split('.')[1]));

        // multiply by 1000 to convert seconds into milliseconds
        return jwt && jwt.exp && jwt.exp * 1000 || null;
    }

    const isExpired = (exp: number | null) => {
        if (!exp) {
            return false;
        }

        return Date.now() > exp;
    }

    // const getToken = async () => {
    //     if (!token) {
    //         return null;
    //     }

    //     // if (isExpired(getExpirationDate(token))) {
    //     //     const updatedToken = await fetch('/update-token', {
    //     //         method: 'POST',
    //     //         body: token.refreshToken
    //     //     })
    //     //         .then(r => r.json());

    //     //     setToken(updatedToken);
    //     // }

    //     // return _token && _token.accessToken;

    //     return token;
    // }

    const isLoggedIn = () => {
        console.log(1, _token !== null, _token);
        return _token !== null;
    };

    let observers: Array<(isLogged: boolean) => void> = [];

    const subscribe = (observer: (isLogged: boolean) => void) => {
        observers.push(observer);
    };

    const unsubscribe = (observer: (isLogged: boolean) => void) => {
        observers = observers.filter(_observer => _observer !== observer);
    };

    const notify = () => {
        const isLogged = isLoggedIn();
        observers.forEach(observer => observer(isLogged));
    };

    return {
        getToken,
        getRole,
        isLoggedIn,
        setToken,
        subscribe,
        unsubscribe,
    };
};