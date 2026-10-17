import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Inventory Page Tests', () => {

  test('Verify inventory page loaded', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await inventoryPage.verifyPageLoaded();

    await inventoryPage.verifyProductCount(6);
  });

});