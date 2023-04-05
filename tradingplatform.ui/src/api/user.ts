import { API_ROOT_AUTH } from "../config";
import { UserProfileType } from "../types";
import { api } from "./api"

export const getAllUsers = async () => {
    return await api().get<UserProfileType[]>(`${API_ROOT_AUTH}users/`);
}