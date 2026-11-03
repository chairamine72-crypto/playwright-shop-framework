import { test, expect } from '../fixtures/test-fixtures';

import { ProductApiClient } from './clients/ProductApiClient';
import { testProduct } from '../test-data/productData';
import { ProductResponse } from './models/ProductResponse';
import * as allure from 'allure-js-commons';

test('Verify create product using API client', async ({ productApiClient }) => {
  const response = await productApiClient.createProduct(testProduct);

  expect(response.status()).toBe(201);

  const createdProduct: ProductResponse = await response.json();

  await allure.attachment(
    'Created Product',
    JSON.stringify(createdProduct, null, 2),
    'application/json',
  );

  expect(createdProduct.id).toBeDefined();

  expect(createdProduct.title).toBeDefined();

  expect(createdProduct.price).toBeGreaterThan(0);
});
