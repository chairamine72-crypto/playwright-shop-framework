import { APIRequestContext, APIResponse } from '@playwright/test';

import { ApiLogger } from '../../utils/ApiLogger';

export class AuthApiClient {
  constructor(private request: APIRequestContext) {}

  async login(username: string, password: string): Promise<APIResponse> {
    const payload = {
      username,
      password,
    };

    const url = 'https://dummyjson.com/auth/login';

    ApiLogger.logRequest('POST', url, payload);

    const response = await this.request.post(url, {
      data: payload,
    });

    const body = await response.json();

    ApiLogger.logResponse(response.status(), body);

    return response;
  }

  async getAccessToken(): Promise<string> {
    const response = await this.login('emilys', 'emilyspass');

    const body = await response.json();

    return body.accessToken;
  }
}
