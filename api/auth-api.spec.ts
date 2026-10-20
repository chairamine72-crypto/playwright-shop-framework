import { test, expect } from '../fixtures/test-fixtures';
import { AuthApiClient } from './clients/AuthApiClient';
import { LoginResponse } from './models/LoginResponse';

test('Verify login returns token', async ({ AuthApiClient }) => {
  const response = await AuthApiClient.login('emilys', 'emilyspass');

  expect(response.ok()).toBeTruthy();

  const loginResponse: LoginResponse = await response.json();

  expect(loginResponse.accessToken).toBeDefined();
});
