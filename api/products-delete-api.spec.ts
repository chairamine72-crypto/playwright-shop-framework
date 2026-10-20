import { test, expect } from '@playwright/test';

test('Verify delete product', async ({ request }) => {
  const response = await request.delete('https://dummyjson.com/products/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.isDeleted).toBeTruthy();
});

test.describe('Products DELETE API Tests', () => {
  test('Verify delete product', async ({ request }) => {
    const response = await request.delete('https://dummyjson.com/products/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);

    expect(body.isDeleted).toBeTruthy();

    console.log(body);
  });
});
