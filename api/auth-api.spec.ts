import { test, expect } from '../fixtures/test-fixtures';
import { LoginRequest } from './models/LoginRequest';
import { LoginResponse } from './models/LoginResponse';
import * as allure from 'allure-js-commons';

export const validLogin: LoginRequest = {
  username: 'emilys',
  password: 'emilyspass',
};

test('Verify login returns token', async ({ AuthApiClient }) => {
  let response;

  await allure.attachment('Login Request', JSON.stringify(validLogin, null, 2), 'application/json');

  await allure.step('Send login request', async () => {
    response = await AuthApiClient.login(validLogin.username, validLogin.password);
  });

  await allure.step('Verify successful response', async () => {
    expect(response!.ok()).toBeTruthy();
  });

  const loginResponse: LoginResponse = await response!.json();

  await allure.attachment(
    'Login Response',
    JSON.stringify(loginResponse, null, 2),
    'application/json',
  );

  await allure.step('Verify access token exists', async () => {
    expect(loginResponse.accessToken).toBeDefined();
  });

  await allure.step('Verify refresh token exists', async () => {
    expect(loginResponse.refreshToken).toBeDefined();
  });
});
