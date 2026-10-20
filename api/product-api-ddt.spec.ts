import { test, expect } from '../fixtures/test-fixtures';
import { ProductResponse } from '../api/models/ProductResponse';

const productIds = [1, 2, 3, 4, 5];

const baseUrl = process.env.API_BASE_URL!;

test.describe('Product API DDT Tests', () => {
  productIds.forEach((id) => {
    test(`Verify product ${id}`, async ({ request }) => {
      const response = await request.get(`${baseUrl}/${id}`);

      expect(response.status()).toBe(200);

      const product: ProductResponse = await response.json();

      expect(product.id).toBe(id);

      expect(product.title).toBeDefined();

      expect(product.price).toBeGreaterThan(0);
    });
  });
});
