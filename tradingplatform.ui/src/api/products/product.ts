import { FiltersType, ProducType } from '../../types';
import { api  } from '../api';
import { API_ROOT_PRODUCTS } from "../../config";


export const  getProductsAsync = async () =>{
    return await api().get<ProducType[]>(`${API_ROOT_PRODUCTS}products/`);
}

export const  getProductAsync = async (id: number) =>{
    return await api().get<ProducType>(`${API_ROOT_PRODUCTS}products/${id}`)
}

export const  getFiltersAsync = async () =>{
    return await api().get<FiltersType>(`${API_ROOT_PRODUCTS}${'products/filters'}`)
}

export const postProductAsync = async (body: {
    id?: number,
    title: string,
    image_url: string,
    description: string,
    release_date: string,
    price: number,
    genres_name: string,
    type_products_name: string,
    platforms_name: string,
    developers_name: string,
    seller_id: number,
}) => {
    console.log(body);
    return await api().post(`${API_ROOT_PRODUCTS}products/create`, body);
}

export const  getProductsBySellerIdAsync = async (body: {id: number}) =>{
    console.log(body);
    return await api().post<ProducType[]>(`${API_ROOT_PRODUCTS}products/get-sellers`, body);
}