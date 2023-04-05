import { AccountLoginData, AccountRegisterData, UserToken } from '../types';
import { api } from './api';
import { API_ROOT_AUTH } from "../config";

export const loginAsync = async (account: AccountLoginData) =>{
    return await api().post<UserToken>(`${API_ROOT_AUTH}login`, account);
}

export const registerAsync = async (account: AccountRegisterData) => {
    return await api().post(`${API_ROOT_AUTH}register`, account);
}

export const refreshTokenAsync = async () => {
    return await api().post<UserToken>(`${API_ROOT_AUTH}refresh`);
}

export const getProfileAsync = async (headers: { Authorization: string; } | { Authorization?: undefined; }) => {
    return await api(headers).get(`${API_ROOT_AUTH}user-profile`);
}
