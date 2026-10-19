import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly removeButtons: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
    this.continueShoppingButton = page.locator('#continue-shopping');
    this.removeButtons = page.locator('[data-test^="remove"]');
  }

  async verifyCartItemCount(expectedCount: number) {
    await expect(this.cartItems).toHaveCount(expectedCount);
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }

  async removeFirstItem() {
    await this.removeButtons.first().click();
  }

  async verifyCartIsEmpty() {
    await expect(this.cartItems).toHaveCount(0);
  }

  async verifyCheckoutButtonVisible() {
    await expect(this.checkoutButton).toBeVisible();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}
