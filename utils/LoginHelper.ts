import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export async function loginAsUser(page: Page, username: string, password: string): Promise<void> {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(username, password);
}
