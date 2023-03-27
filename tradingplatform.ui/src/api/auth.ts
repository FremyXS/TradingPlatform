import { AccountLoginData, UserToken } from '../types';
import { api } from './api';
import { API_ROOT_AUTH } from "../config";

export const loginAsync = async (account: AccountLoginData) =>{
    return await api.post<UserToken>(`${API_ROOT_AUTH}login`, account)
}