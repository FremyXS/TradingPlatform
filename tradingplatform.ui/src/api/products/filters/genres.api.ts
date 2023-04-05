import { API_ROOT_PRODUCTS } from "../../../config";
import { FilterType } from "../../../types";
import { api } from "../../api";

export const getGenresAsync = async () => {
    return await api().get<FilterType[]>(`${API_ROOT_PRODUCTS}filters/genres`);
}

export const postGenreAsync = async (body: FilterType) => {
    return await api().post(`${API_ROOT_PRODUCTS}filters/genres`, body);
}

export const deleteGenreAsync = async (body: FilterType) => {
    return await api().delete(`${API_ROOT_PRODUCTS}filters/genres/${body.name}`)
}

export const updateGenreAsync = async (name: string, body: FilterType) => {
    return await api().patch(`${API_ROOT_PRODUCTS}filters/genres/${name}`, body);
}