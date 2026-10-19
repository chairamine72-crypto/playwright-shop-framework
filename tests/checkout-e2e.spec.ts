import { test } from '../fixtures/test-fixtures';

test.describe('Checkout E2E Tests', () => {
  test('Complete order successfully', async ({
    inventoryPage,
    cartPage,
    checkoutPage,
    checkoutOverviewPage,
    checkoutCompletePage,
  }) => {
    await inventoryPage.addFirstProductToCart();

    await inventoryPage.openCart();

    await cartPage.clickCheckout();

    await checkoutPage.enterCheckoutInformation('Amin', 'Chair', '41836');

    await checkoutPage.clickContinue();

    await checkoutOverviewPage.verifyOverviewLoaded();

    await checkoutOverviewPage.verifyProductCount(1);

    await checkoutOverviewPage.verifyTotalVisible();

    await checkoutOverviewPage.clickFinish();

    await checkoutCompletePage.verifyOrderCompleted();
  });
});
