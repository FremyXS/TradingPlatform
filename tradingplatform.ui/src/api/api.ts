import axios from "axios";

export const api = (headers?: { Authorization: string; } | { Authorization?: undefined; }) => {
  return axios.create({
    headers: headers || {}
  });
}