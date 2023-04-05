import { API_ROOT_PRODUCTS } from "../../../config";
import { FilterType } from "../../../types";
import { api } from "../../api";

export const getPlatformsAsync = async () => {
    return await api().get<FilterType[]>(`${API_ROOT_PRODUCTS}filters/platforms`);
}

export const postPlatformAsync = async (body: FilterType) => {
    return await api().post(`${API_ROOT_PRODUCTS}filters/platforms`, body);
}

export const deletePlatformAsync = async (body: FilterType) => {
    return await api().delete(`${API_ROOT_PRODUCTS}filters/platforms/${body.name}`)
}

export const updatePlatformAsync = async (name: string, body: FilterType) => {
    return await api().patch(`${API_ROOT_PRODUCTS}filters/platforms/${name}`, body);
}