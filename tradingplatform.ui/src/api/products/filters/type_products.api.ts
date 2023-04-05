import { API_ROOT_PRODUCTS } from "../../../config"
import { FilterType } from "../../../types"
import { api } from "../../api"

export const deleteTypeProductAsync = async (body: FilterType) => {
    return await api().delete(`${API_ROOT_PRODUCTS}filters/type-products/${body.name}`)
}

export const getTypeProductsAsync = async () => {
    return await api().get<FilterType[]>(`${API_ROOT_PRODUCTS}filters/type-products`);
}

export const postTypeProductAsync = async (body: FilterType) => {
    return await api().post(`${API_ROOT_PRODUCTS}filters/type-products`, body);
}

export const updateTypeProductAsync = async (name: string, body: FilterType) => {
    return await api().patch(`${API_ROOT_PRODUCTS}filters/type-products/${name}`, body);
}