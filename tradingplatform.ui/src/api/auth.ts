import { AccountLoginData, UserToken } from '../types';
import { api } from './api';
import { API_ROOT_AUTH } from "../config";

export const loginAsync = async (account: AccountLoginData) =>{
    console.log(1);
    return await api().post<UserToken>(`${API_ROOT_AUTH}login`, account);
}
export const refreshTokenAsync = async () => {
    console.log(2);
    return await api().post<UserToken>(`${API_ROOT_AUTH}refresh`);
}

export const getProfileAsync = async (headers: { Authorization: string; } | { Authorization?: undefined; }) => {
    console.log(3);
    return await api(headers).get(`${API_ROOT_AUTH}user-profile`);
}
