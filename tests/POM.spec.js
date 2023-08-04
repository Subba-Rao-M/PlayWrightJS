const {test, expect}= require('@playwright/test');
import { LoginPageNew } from './pages/LoginPageNew';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';

//Login Page
//HOme Page
//Cart Pagenpx 


test('test Login', async ({page})=>{

//Login Page
const login = new LoginPageNew(page); // same page fixture form test case passed here to call constructor
await login.goToLoginPage();
await login.login('pavanol', 'test@123');
// HOme Page
await page.waitForTimeout(5000);
const home = new HomePage(page);
await home.addProductToCart("Nexus 6");
await home.goToCart();
await page.waitForTimeout(5000);
//Cart Page
const cartPage = new CartPage(page);
const status = await cartPage.checkProductToCart("Nexus 6");
await expect(await status).toBe(true);

});