/* eslint-disable no-underscore-dangle */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { getCookieAgent } from './getCookieAgent';

const API_URL = process.env.NEXT_PUBLIC_REST_API_URL as string;

const axiosInstance: AxiosInstance = axios.create({ baseURL: API_URL });

let accessToken: string | undefined = undefined;

const updateHeader = (request: AxiosRequestConfig): any => {
  accessToken = getCookieAgent();

  const newHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
    ...request.headers
  };

  console.log(`fetch [${request.method?.toUpperCase()}]: ${request.url}`);

  request.headers = newHeaders;
  return request;
};

axiosInstance.interceptors.request.use(config => {
  const newConfig = updateHeader(config);
  return newConfig;
});

export default axiosInstance;
