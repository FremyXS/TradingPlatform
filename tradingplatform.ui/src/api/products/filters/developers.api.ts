import { API_ROOT_PRODUCTS } from "../../../config";
import { FilterType } from "../../../types";
import { api } from "../../api";

export const getDevelopersAsync = async () => {
    return await api().get<FilterType[]>(`${API_ROOT_PRODUCTS}filters/developers`);
}

export const postDeveloperAsync = async (body: FilterType) => {
    return await api().post(`${API_ROOT_PRODUCTS}filters/developers`, body);
}

export const deleteDeveloperAsync = async (body: FilterType) => {
    return await api().delete(`${API_ROOT_PRODUCTS}filters/developers/${body.name}`)
}

export const updateDeveloperAsync = async (name: string, body: FilterType) => {
    return await api().patch(`${API_ROOT_PRODUCTS}filters/developers/${name}`, body);
}