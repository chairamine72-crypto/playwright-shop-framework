import { test } from '../fixtures/test-fixtures';

test.describe('Checkout Page Tests', () => {
  test('Verify checkout page opens', async ({ inventoryPage, cartPage, checkoutPage }) => {
    await inventoryPage.addFirstProductToCart();

    await inventoryPage.openCart();

    await cartPage.clickCheckout();

    await checkoutPage.verifyCheckoutPageLoaded();
  });

  test('Verify checkout information entry', async ({ inventoryPage, cartPage, checkoutPage }) => {
    await inventoryPage.addFirstProductToCart();

    await inventoryPage.openCart();

    await cartPage.clickCheckout();

    await checkoutPage.enterCheckoutInformation('Amin', 'Chair', '41836');

    await checkoutPage.clickContinue();
  });
});
