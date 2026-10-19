import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly shoppingCart: Locator;
  readonly prices: Locator;

  readonly productNames: Locator;
  readonly addToCartButtons: Locator;
  readonly cartBadge: Locator;

  readonly removeButtons: Locator;

  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCart = page.locator('.shopping_cart_link');
    this.prices = page.locator('.inventory_item_price');

    this.productNames = page.locator('.inventory_item_name');
    this.addToCartButtons = page.locator('[data-test^="add-to-cart"]');
    this.cartBadge = page.locator('.shopping_cart_badge');

    this.removeButtons = page.locator('[data-test^="remove"]');

    this.shoppingCartLink = page.locator('.shopping_cart_link');
  }

  async verifyPageLoaded() {
    await expect(this.title).toHaveText('Products');

    await expect(this.shoppingCart).toBeVisible();
  }

  async verifyProductCount(expectedCount: number) {
    await expect(this.inventoryItems).toHaveCount(expectedCount);
  }

  async verifyProductExists(productName: string) {
    const product = this.productNames.filter({
      hasText: productName,
    });

    await expect(product).toHaveCount(1);
  }

  async verifyPricesDisplayed() {
    const count = await this.prices.count();

    for (let i = 0; i < count; i++) {
      await expect(this.prices.nth(i)).toContainText('$');
    }
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }

  async removeFirstProductFromCart() {
    await this.removeButtons.first().click();
  }

  async verifyCartIsEmpty() {
    await expect(this.cartBadge).toHaveCount(0);
  }

  async verifyCartCount(expectedCount: string) {
    await expect(this.cartBadge).toHaveText(expectedCount);
  }

  async openCart() {
    await this.shoppingCartLink.click();
  }
}
