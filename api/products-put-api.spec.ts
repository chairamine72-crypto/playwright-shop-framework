import { test, expect } from '@playwright/test';

test.describe('Products PUT API Tests', () => {
  test('Verify update product', async ({ request }) => {
    const response = await request.put('https://dummyjson.com/products/1', {
      data: {
        title: 'Updated Product',
        price: 199,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);

    expect(body.title).toBe('Updated Product');

    expect(body.price).toBe(199);

    console.log(body);
  });
});
