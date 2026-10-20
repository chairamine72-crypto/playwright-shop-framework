import { test, expect } from '@playwright/test';

test.describe('Products POST API Tests', () => {
  test('Verify create product', async ({ request }) => {
    const response = await request.post('https://dummyjson.com/products/add', {
      data: {
        title: 'Playwright Test Product',
        price: 99,
      },
    });

    //expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body.id).toBeDefined();

    expect(body.title).toBe('Playwright Test Product');

    expect(body.price).toBe(99);

    console.log(body);
  });
});
