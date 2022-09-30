import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

import { environment } from '@src/environments/environment';
import { AxiosTokenInterceptor } from '@app/interceptors/axios-token.interceptor';

const http = axios.create();

const tokenInterceptor = new AxiosTokenInterceptor();

http.interceptors.request.use(
  tokenInterceptor.onFulfilledRequest,
  tokenInterceptor.onRejectedRequest
);
http.interceptors.response.use(
  tokenInterceptor.onFulfilledResponse,
  tokenInterceptor.onRejectedResponse
);
interface RequestConfig extends AxiosRequestConfig {
  sendToken?: boolean;
}

type AxiosQueryFn = BaseQueryFn<
  Omit<RequestConfig, 'baseURL'>,
  AxiosError,
  unknown,
  unknown
>;

const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): AxiosQueryFn =>
  async (config) => {
    try {
      const { data } = await http({ baseURL: baseUrl, ...config });
      return { data };
    } catch (reason) {
      const err = reason as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const baseQuery = axiosBaseQuery({
  baseUrl: environment.apiBaseUrl,
});
