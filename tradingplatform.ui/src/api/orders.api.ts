import { API_ROOT_ORDERS } from "../config"
import { OrderType } from "../types";
import { api } from "./api"

export const postOrdersAsync = async (orders: OrderType[]) => {
    return await api().post(`${API_ROOT_ORDERS}/store`, orders);
}