import { test, expect } from '../fixtures/test-fixtures';

import { ProductApiClient } from '../api/clients/ProductApiClient';
import { testProduct } from './test-data/productData';

test('Verify API product exists in UI', async ({ request, inventoryPage }) => {
  const productClient = new ProductApiClient(request);

  const response = await productClient.getProducts();

  expect(response.status()).toBe(200);

  const body = await response.json();

  const firstProduct = body.products[0].title;

  console.log(`API Product: ${firstProduct}`);

  await inventoryPage.verifyProductExists(firstProduct);
});
