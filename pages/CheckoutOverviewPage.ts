import { Page, Locator, expect } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;

  readonly finishButton: Locator;
  readonly cartItems: Locator;
  readonly totalLabel: Locator;

  constructor(page: Page) {
    this.page = page;

    this.finishButton = page.locator('#finish');
    this.cartItems = page.locator('.cart_item');
    this.totalLabel = page.locator('.summary_total_label');
  }

  async verifyOverviewLoaded() {
    await expect(this.finishButton).toBeVisible();
  }

  async verifyProductCount(expectedCount: number) {
    await expect(this.cartItems).toHaveCount(expectedCount);
  }

  async verifyTotalVisible() {
    await expect(this.totalLabel).toBeVisible();
  }

  async clickFinish() {
    await this.finishButton.click();
  }
}
