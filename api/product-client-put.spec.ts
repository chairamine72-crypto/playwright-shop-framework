import { test, expect } from '../fixtures/test-fixtures';
import { ProductApiClient } from './clients/ProductApiClient';
import { testProduct } from '../test-data/productData';

test.describe('Product Client PUT Tests', () => {
  test('Verify update product using API client', async ({ productApiClient }) => {
    const response = await productApiClient.updateProduct(1, testProduct);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);

    expect(body.title).toBe('Playwright Product');

    expect(body.price).toBe(99);

    console.log(body);
  });
});
