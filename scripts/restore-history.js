const fs = require('fs');

if (fs.existsSync('allure-history/history')) {
  fs.cpSync('allure-history/history', 'allure-results/history', {
    recursive: true,
    force: true,
  });

  console.log('History restored');
} else {
  console.log('No previous history found');
}
