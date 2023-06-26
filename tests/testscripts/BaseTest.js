import { test } from '@playwright/test';
const { LoginPage } = require('../pages/LoginPage');

//test.beforeEach(async ({ page }) => {
 // await page.goto(config.baseUrl);
//});

//test.afterEach(async ({ page }) => {
  //await page.close();
//});



exports.BaseTest = class BaseTest {

  constructor(page){
    this.page = page;
    
  
  }

 
  async setup() {
    // Perform setup tasks
    // For example, launching the browser and creating a new page
    this.env = process.env.TEST_ENV || 'acc'; // Default to the sys environment
    this.config = require('../config/'+env);
    this.context = await test.newContext();
    this.page = await this.context.newPage();
    await page.goto(config.baseUrl);
    const loginPage = new LoginPage(page);
    loginPage.privateLogin(config.customerNumber, config.environment);
    
  }

  async teardown() {
    // Perform teardown tasks
    // For example, closing the browser and cleaning up resources
    await this.page.close();
    await this.context.close();
  }

  async Login(page){
  
  
}
 
  
}

