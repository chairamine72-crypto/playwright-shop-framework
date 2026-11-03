const fs = require('fs');
const path = require('path');

const source = path.join('allure-report', 'history');

const target = path.join('allure-results', 'history');

if (fs.existsSync(source)) {
  fs.mkdirSync(target, { recursive: true });

  fs.cpSync(source, target, { recursive: true });

  console.log('Allure history copied');
} else {
  console.log('No previous history found');
}
