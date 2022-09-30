import {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';

import { SessionService } from '@app/services/session.service';

interface RequestConfig extends AxiosRequestConfig {
  sendToken?: boolean;
}

export class AxiosTokenInterceptor {
  constructor() {
    this.onFulfilledRequest = this.onFulfilledRequest.bind(this);
    this.onRejectedResponse = this.onRejectedResponse.bind(this);
  }

  private session = new SessionService();

  private appendTokenInHeaders(headers: AxiosRequestHeaders) {
    const token = this.session.getToken();
    headers['Authorization'] = `Bearer ${token}`;
  }

  onFulfilledRequest(config: RequestConfig): RequestConfig {
    if (config.sendToken && config.headers) {
      this.appendTokenInHeaders(config.headers);
    }

    return config;
  }

  onRejectedRequest(err: any): any {
    return Promise.reject(err);
  }

  onFulfilledResponse(response: AxiosResponse) {
    return response;
  }

  onRejectedResponse(error: AxiosError) {
    const statusCode = error.response?.status;
    const requestUrl = error.config.url;

    if (statusCode === 401 && requestUrl !== '/auth/signin') {
      this.session.remove();
      window.location.href = '/auth/signin';
    }
  }
}
