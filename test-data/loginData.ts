export const loginData = [
  {
    username: '',
    password: '',
    expectedError: 'Username is required',
  },
  {
    username: 'standard_user',
    password: '',
    expectedError: 'Password is required',
  },
  {
    username: 'wrong_user',
    password: 'wrong_password',
    expectedError: 'Username and password do not match',
  },
];
