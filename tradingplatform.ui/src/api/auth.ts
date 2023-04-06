import { AccountLoginData, AccountRegisterData, UserProfileType, UserToken } from '../types';
import { api } from './api';
import { API_ROOT_AUTH } from "../config";

export const loginAsync = async (account: AccountLoginData) =>{
    return await api().post<UserToken>(`${API_ROOT_AUTH}auth/login`, account);
}

export const registerAsync = async (account: AccountRegisterData) => {
    return await api().post(`${API_ROOT_AUTH}auth/register`, account);
}

export const refreshTokenAsync = async (headers?: { Authorization: string; } | { Authorization?: undefined; }) => {
    return await api(headers).post<UserToken>(`${API_ROOT_AUTH}auth/refresh`);
}

export const getProfileAsync = async (headers: { Authorization: string; } | { Authorization?: undefined; }) => {
    return await api(headers).get<UserProfileType>(`${API_ROOT_AUTH}auth/user-profile`);
}
