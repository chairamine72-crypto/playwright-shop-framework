import { test, expect } from '../fixtures/test-fixtures';
import { LoginPage } from '../pages/LoginPage';
import * as allure from 'allure-js-commons';

test('successful login', async ({ loginPage }) => {
  await allure.step('Open login page', async () => {
    await loginPage.navigate();
  });

  await allure.step('Login as standard user', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
  });

  await allure.step('Verify inventory page is displayed', async () => {
    await expect(loginPage.page).toHaveURL(/inventory/);
  });
});
