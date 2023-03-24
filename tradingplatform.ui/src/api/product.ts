import { ProducType } from '../types';
import { api } from './api';
import { API_ROOT_PRODUCTS } from "../config";

export const  getProductsAsync = async () =>{
    return await api.get<ProducType[]>(API_ROOT_PRODUCTS)
}

export const  getProductAsync = async (id: number) =>{
    return await api.get<ProducType>(`${API_ROOT_PRODUCTS}${id}`)
}