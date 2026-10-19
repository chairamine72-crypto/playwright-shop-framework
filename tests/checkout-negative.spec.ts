import { test } from '../fixtures/test-fixtures';

test.describe('Checkout Negative Tests', () => {
  test('Verify missing first name', async ({ inventoryPage, cartPage, checkoutPage }) => {
    await inventoryPage.addFirstProductToCart();

    await inventoryPage.openCart();

    await cartPage.clickCheckout();

    await checkoutPage.enterCheckoutInformation('', 'Chair', '41836');

    await checkoutPage.clickContinue();

    await checkoutPage.verifyErrorMessage('First Name is required');
  });
});
