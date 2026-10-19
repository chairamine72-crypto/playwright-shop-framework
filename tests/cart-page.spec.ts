import { test } from '../fixtures/test-fixtures';

test.describe('Cart Page Tests', () => {
  test('Verify product added to cart', async ({ inventoryPage, cartPage }) => {
    await inventoryPage.addFirstProductToCart();

    await inventoryPage.openCart();

    await cartPage.verifyCartItemCount(1);
  });

  test('Verify remove product from cart', async ({ inventoryPage, cartPage }) => {
    await inventoryPage.addFirstProductToCart();

    await inventoryPage.openCart();

    await cartPage.verifyCartItemCount(1);

    await cartPage.removeFirstItem();

    await cartPage.verifyCartIsEmpty();
  });

  test('Verify continue shopping', async ({ inventoryPage, cartPage }) => {
    await inventoryPage.addFirstProductToCart();

    await inventoryPage.openCart();

    await cartPage.clickContinueShopping();

    await inventoryPage.verifyPageLoaded();
  });

  test('Verify checkout button visible', async ({ inventoryPage, cartPage }) => {
    await inventoryPage.addFirstProductToCart();

    await inventoryPage.openCart();

    await cartPage.verifyCheckoutButtonVisible();
  });
});
