import { test, expect } from '../fixtures/test-fixtures';
import { users } from '../test-data/users';

const validUsers = [
  users.standardUser,
  users.problemUser,
  users.performanceUser,
  users.errorUser,
  users.visualUser,
];

test.describe('Login Role DDT Tests', () => {
  validUsers.forEach((user) => {
    test(`Verify login for ${user.username}`, async ({ loginPage }) => {
      await loginPage.navigate();

      await loginPage.login(user.username, user.password);

      await expect(loginPage.page).toHaveURL(/inventory/);
    });
  });
});

test('Verify locked user cannot login', async ({ loginPage }) => {
  await loginPage.navigate();

  await loginPage.login(users.lockedUser.username, users.lockedUser.password);

  await loginPage.verifyErrorMessage('Sorry, this user has been locked out.');
});
