import { test, expect } from '@playwright/test';
import { ProductApiClient } from './clients/ProductApiClient';

test('Verify get products using API client', async ({ request }) => {
  const productClient = new ProductApiClient(request);

  const response = await productClient.getProducts();

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.products.length).toBeGreaterThan(0);
});
