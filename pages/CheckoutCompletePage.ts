import { Page, Locator, expect } from '@playwright/test';

export class CheckoutCompletePage {
  readonly page: Page;

  readonly completeHeader: Locator;
  readonly backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.completeHeader = page.locator('.complete-header');
    this.backHomeButton = page.locator('#back-to-products');
  }

  async verifyOrderCompleted() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }

  async clickBackHome() {
    await this.backHomeButton.click();
  }
}
