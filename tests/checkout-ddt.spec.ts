import { test } from '../fixtures/test-fixtures';
import { checkoutData } from '../test-data/checkoutData';

test.describe('Checkout Data Driven Tests', () => {
  checkoutData.forEach((data) => {
    test(`Verify validation: ${data.expectedError}`, async ({
      inventoryPage,
      cartPage,
      checkoutPage,
    }) => {
      await inventoryPage.addFirstProductToCart();

      await inventoryPage.openCart();

      await cartPage.clickCheckout();

      await checkoutPage.enterCheckoutInformation(data.firstName, data.lastName, data.postalCode);

      await checkoutPage.clickContinue();

      await checkoutPage.verifyErrorMessage(data.expectedError);
    });
  });
});
