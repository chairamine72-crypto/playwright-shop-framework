import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {

  readonly page: Page;

  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly shoppingCart: Locator;

  constructor(page: Page) {

    this.page = page;

    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCart = page.locator('.shopping_cart_link');
  }

  async verifyPageLoaded() {

    await expect(this.title)
      .toHaveText('Products');

    await expect(this.shoppingCart)
      .toBeVisible();
  }

  async verifyProductCount(expectedCount: number) {

    await expect(this.inventoryItems)
      .toHaveCount(expectedCount);
  }
}