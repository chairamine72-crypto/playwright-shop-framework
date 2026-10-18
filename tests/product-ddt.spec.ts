import { test } from '../fixtures/test-fixtures';
import { products } from '../test-data/products';

test.describe('Product Data Driven Tests', () => {
  products.forEach((product) => {
    test(`Verify product '${product}' exists`, async ({ inventoryPage }) => {
      await inventoryPage.verifyProductExists(product);
    });
  });
});
