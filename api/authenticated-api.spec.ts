import { test, expect } from '../fixtures/test-fixtures';

test('Verify authenticated request', async ({ AuthApiClient, request }) => {
  const token = await AuthApiClient.getAccessToken();

  const response = await request.get('https://dummyjson.com/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  expect(body.username).toBeDefined();
});
