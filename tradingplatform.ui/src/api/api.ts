import axios from "axios";

export const api = (headers?: { Authorization: string; } | { Authorization?: undefined; }) => {
  
  console.log('api create')

  return axios.create({
    headers: headers || {}
  });
}