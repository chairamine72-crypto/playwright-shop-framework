import { test } from '../fixtures/test-fixtures';
import * as allure from 'allure-js-commons';

test.describe('Checkout E2E Tests', () => {
  test('Complete order successfully', async ({
    inventoryPage,
    cartPage,
    checkoutPage,
    checkoutOverviewPage,
    checkoutCompletePage,
  }) => {
    await allure.step('Inventury page first product to cart', async () => {
      await inventoryPage.addFirstProductToCart();
    });

    await allure.step('Inventory oage open cart', async () => {
      await inventoryPage.openCart();
    });

    await allure.step('Cart page checkout', async () => {
      await cartPage.clickCheckout();
    });

    await allure.attachment(
      'Customer Data',
      JSON.stringify(
        {
          firstName: 'Amin',
          lastName: 'Chair',
          postalCode: '41836',
        },
        null,
        2,
      ),
      'application/json',
    );

    await allure.step('Checkout page enter information', async () => {
      await checkoutPage.enterCheckoutInformation('Amin', 'Chair', '41836');
    });

    await allure.step('Checkout page continue', async () => {
      await checkoutPage.clickContinue();
    });

    await allure.step('Checkout overview page loaded', async () => {
      await checkoutOverviewPage.verifyOverviewLoaded();
    });

    await allure.step('Checkout overview oage product count', async () => {
      await checkoutOverviewPage.verifyProductCount(1);
    });

    await allure.step('Checkout overview page visible', async () => {
      await checkoutOverviewPage.verifyTotalVisible();
    });

    await allure.step('Checkout overview page finish', async () => {
      await checkoutOverviewPage.clickFinish();
    });

    await allure.step('Checkout complete page ', async () => {
      await checkoutCompletePage.verifyOrderCompleted();
    });

    const screenshot = await checkoutCompletePage.page.screenshot();

    await allure.attachment('Order Confirmation', screenshot, 'image/png');
  });
});
