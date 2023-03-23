import { ProducType } from '../types/ProducType';
import { api } from './api';

export const  getProductsAsync = async () =>{
    return await api.get<ProducType[]>('products')
}

export const  getProductAsync = async (id: number) =>{
    return await api.get<ProducType>(`products/${id}`)
}