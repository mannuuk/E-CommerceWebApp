import axios, { AxiosRequestConfig } from "axios";

export const fetcher = (config: AxiosRequestConfig) => {
  const { url, method, data, headers } = config;
  return axios.request({
    baseURL: "https://fakestoreapi.in/api",
    url,
    method,
    data,
    headers,
  });
};
