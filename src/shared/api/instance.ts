import Axios, { AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: "https://api.kinopoisk.dev",
  headers: { "X-API-KEY": import.meta.env.API_URL },
}); // use your own URL here or environment variable

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return AXIOS_INSTANCE({ ...config, ...options });
};
