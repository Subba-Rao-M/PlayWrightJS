import { test, expect } from '@playwright/test';

const { LoginPage } = require('../pages/LoginPage');


const env = process.env.TEST_ENV || 'acc'; // Default to the sys environment
const config = require('../config/'+env);

test.beforeEach(async ({ page }) => {
  await page.goto(config.baseUrl);
});

test.afterEach(async ({ page }) => {
  await page.close();
});


test('test login page using POM', async ({ page }) => {
  test.setTimeout(120000);
  const loginPage = new LoginPage(page);
  loginPage.privateLogin(config.customerNumber, config.environment);
  let pagetitle = page.title();
  console.log(pagetitle);
  await expect(page).toHaveTitle(config.loginPageTitle);
  await page.getByRole('button', { name: 'Tillåt alla' }).click();
  await page.getByRole('link', { name: 'Spara & placera' }).click();
  await page.getByRole('link', { name: '0186_Bosse-Fbr_Testman_5143203' }).click();
});


