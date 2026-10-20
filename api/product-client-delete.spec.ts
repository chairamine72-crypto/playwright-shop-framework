import { test, expect } from '@playwright/test';
import { ProductApiClient } from './clients/ProductApiClient';
import { testProduct } from '../test-data/productData';

test.describe('Product Client DELETE Tests', () => {
  test('Verify delete product using API client', async ({ request }) => {
    const productClient = new ProductApiClient(request);

    const response = await productClient.deleteProduct(1);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);

    expect(body.isDeleted).toBeTruthy();

    console.log(body);
  });
});
