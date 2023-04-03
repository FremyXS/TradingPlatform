import { FilterType, FiltersType, ProducType } from '../types';
import { api  } from './api';
import { API_ROOT_PRODUCTS } from "../config";


export const  getProductsAsync = async () =>{
    return await api().get<ProducType[]>(`${API_ROOT_PRODUCTS}products/`);
}

export const  getProductAsync = async (id: number) =>{
    return await api().get<ProducType>(`${API_ROOT_PRODUCTS}products/${id}`)
}

export const  getFiltersAsync = async () =>{
    return await api().get<FiltersType>(`${API_ROOT_PRODUCTS}${'products/filters'}`)
}

export const getGenresAsync = async () => {
    return await api().get<FilterType[]>(`${API_ROOT_PRODUCTS}filters/genres`);
}

export const getPlatformsAsync = async () => {
    return await api().get<FilterType[]>(`${API_ROOT_PRODUCTS}filters/platforms`);
}

export const getTypeProductsAsync = async () => {
    return await api().get<FilterType[]>(`${API_ROOT_PRODUCTS}filters/type-products`);
}

export const getDevelopersAsync = async () => {
    return await api().get<FilterType[]>(`${API_ROOT_PRODUCTS}filters/developers`);
}

export const postDeveloperAsync = async (body: {name: string}) => {
    return await api().post(`${API_ROOT_PRODUCTS}filters/developers`, body);
}

export const postGenreAsync = async (body: {name: string}) => {
    return await api().post(`${API_ROOT_PRODUCTS}filters/genres`, body);
}

export const postPlatformAsync = async (body: {name: string}) => {
    return await api().post(`${API_ROOT_PRODUCTS}filters/platforms`, body);
}

export const postTypeProductAsync = async (body: {name: string}) => {
    return await api().post(`${API_ROOT_PRODUCTS}filters/type-products`, body);
}