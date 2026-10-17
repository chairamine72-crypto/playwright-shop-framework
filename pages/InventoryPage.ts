import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {

  readonly page: Page;

  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly shoppingCart: Locator;
  readonly productNames: Locator;
  readonly prices: Locator;

  readonly addToCartButtons: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {

    this.page = page;

    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCart = page.locator('.shopping_cart_link');
    this.productNames = page.locator('.inventory_item_name');
    this.prices = page.locator('.inventory_item_price');
    
    this.addToCartButtons =page.locator('[data-test^="add-to-cart"]');
    this.cartBadge =page.locator('.shopping_cart_badge');
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

  async verifyProductExists(productName: string) {

    await expect(
      this.page.getByText(productName)
    ).toBeVisible();
  }

  async verifyPricesDisplayed() {

    const count = await this.prices.count();

    for (let i = 0; i < count; i++) {

      await expect(
        this.prices.nth(i)
      ).toContainText('$');
    }
  }

  async addFirstProductToCart() {

    await this.addToCartButtons
        .first()
        .click();
  }

  async verifyCartCount(expectedCount: string) {

    await expect(this.cartBadge)
        .toHaveText(expectedCount);
  }

}