import { test, expect } from '../fixtures/test-fixtures';
import { loginData } from '../test-data/loginData';
import { users } from '../test-data/users';

test('Verify standard user login', async ({ loginPage }) => {
  await loginPage.navigate();

  await loginPage.login(users.standardUser.username, users.standardUser.password);

  await expect(loginPage.page).toHaveURL(/inventory/);
});

test('Verify locked user cannot login', async ({ loginPage }) => {
  await loginPage.navigate();

  await loginPage.login(users.lockedUser.username, users.lockedUser.password);

  await loginPage.verifyErrorMessage('Sorry, this user has been locked out.');
});

test('Verify performance user login', async ({ loginPage }) => {
  await loginPage.navigate();

  await loginPage.login(users.performanceUser.username, users.performanceUser.password);

  await expect(loginPage.page).toHaveURL(/inventory/);
});
