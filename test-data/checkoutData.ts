export const checkoutData = [
  {
    firstName: '',
    lastName: 'Chair',
    postalCode: '41836',
    expectedError: 'First Name is required',
  },
  {
    firstName: 'Amin',
    lastName: '',
    postalCode: '41836',
    expectedError: 'Last Name is required',
  },
  {
    firstName: 'Amin',
    lastName: 'Chair',
    postalCode: '',
    expectedError: 'Postal Code is required',
  },
];
