import Axios, { AxiosError, AxiosRequestConfig } from "axios";
import qs from "query-string";

const baseURL = import.meta.env.PROD ? "https://api.kinopoisk.dev" : "/";
const apiKey = import.meta.env.VITE_KINOPOISK_API_KEY;
export const AXIOS_INSTANCE = Axios.create({
  baseURL,
  headers: { "X-API-KEY": apiKey },
  paramsSerializer: (data) => qs.stringify(data),
}); // use your own URL here or environment variable

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return AXIOS_INSTANCE({ ...config, ...options }).then(({ data }) => data);
};

export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;
