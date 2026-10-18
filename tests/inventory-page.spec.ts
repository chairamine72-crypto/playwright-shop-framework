import { test, expect } from '../fixtures/test-fixtures';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

//import { loginAsStandardUser } from '../utils/LoginHelper';

import { products } from '../test-data/products';

test.describe('Inventory Page Tests', () => {
  test('Verify inventory page loaded', async ({ inventoryPage }) => {
    await inventoryPage.verifyPageLoaded();

    await inventoryPage.verifyProductCount(6);
  });

  test('Verify Backpack product exists', async ({ inventoryPage }) => {
    await inventoryPage.verifyProductExists('Sauce Labs Backpack');
  });

  test('Verify all prices are displayed', async ({ inventoryPage }) => {
    await inventoryPage.verifyPricesDisplayed();
  });

  test('Verify add product to cart', async ({ inventoryPage }) => {
    await inventoryPage.addFirstProductToCart();

    await inventoryPage.verifyCartCount('1');
  });

  test('Verify remove product from cart', async ({ inventoryPage }) => {
    await inventoryPage.addFirstProductToCart();

    await inventoryPage.verifyCartCount('1');

    await inventoryPage.removeFirstProductFromCart();

    await inventoryPage.verifyCartIsEmpty();
  });
});
