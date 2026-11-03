import { test, expect } from '../fixtures/test-fixtures';
import { LoginResponse } from './models/LoginResponse';
import * as allure from 'allure-js-commons';

test('Verify login returns token', async ({ AuthApiClient }) => {
  let response;

  await allure.step('Send login request', async () => {
    response = await AuthApiClient.login('emilys', 'emilyspass');
  });

  await allure.step('Verify successful response', async () => {
    expect(response!.ok()).toBeTruthy();
  });

  const loginResponse: LoginResponse = await response!.json();

  await allure.step('Verify access token exists', async () => {
    expect(loginResponse.accessToken).toBeDefined();
  });

  await allure.step('Verify refresh token exists', async () => {
    expect(loginResponse.refreshToken).toBeDefined();
  });
});
