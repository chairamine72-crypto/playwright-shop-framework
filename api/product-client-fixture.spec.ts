import { test, expect } from '../fixtures/test-fixtures';
import { ProductListResponse } from './models/ProductListResponse';

test('Verify products using fixture', async ({ productApiClient }) => {
  const response = await productApiClient.getProducts();

  expect(response.status()).toBe(200);

  //const body = await response.json();

  const productsResponse: ProductListResponse = await response.json();

  expect(productsResponse.products.length).toBeGreaterThan(0);

  const firstProduct = productsResponse.products[0];

  expect(firstProduct.title).toBeDefined();
});
