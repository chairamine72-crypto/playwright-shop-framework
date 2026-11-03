require('dotenv').config();
const fs = require('fs');

const content = `
Browser=${process.env.BROWSER}
Framework=${process.env.FRAMEWORK}
Language=${process.env.LANGUAGE}
Environment=${process.env.TEST_ENV}
Tester=${process.env.TESTER}
`;

if (!fs.existsSync('allure-results')) {
  fs.mkdirSync('allure-results', { recursive: true });
}

fs.writeFileSync('allure-results/environment.properties', content.trim());

console.log('Allure environment.properties created');
