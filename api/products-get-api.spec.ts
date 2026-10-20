import { test, expect } from '@playwright/test';

test.describe('Products API Tests', () => {
  test('Verify GET products API returns status 200', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products');

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });

  test('Verify products list is not empty', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products');

    const body = await response.json();

    expect(body.products.length).toBeGreaterThan(0);
  });

  test('Verify first product contains required fields', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products');

    const body = await response.json();

    const firstProduct = body.products[0];

    expect(firstProduct.id).toBeDefined();

    expect(firstProduct.title).toBeDefined();

    expect(firstProduct.price).toBeDefined();

    expect(firstProduct.category).toBeDefined();
  });

  test('Verify product count', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products');

    const body = await response.json();

    expect(body.products.length).toBeGreaterThan(10);
  });

  test('Print API response to console', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products');

    const body = await response.json();

    console.log(JSON.stringify(body, null, 2));

    expect(response.status()).toBe(200);
  });
});
