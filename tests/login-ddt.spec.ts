import { test } from '../fixtures/test-fixtures';
import { loginData } from '../test-data/loginData';

test.describe('Login Data Driven Tests', () => {
  loginData.forEach((data) => {
    test(`Verify login validation: ${data.expectedError}`, async ({ loginPage }) => {
      await loginPage.navigate();

      await loginPage.login(data.username, data.password);

      await loginPage.verifyErrorMessage(data.expectedError);
    });
  });
});
