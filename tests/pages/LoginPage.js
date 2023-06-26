const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page;
        this.environment = page.getByRole('combobox', { name: 'Test environment:' });
        this.personnumber = page.getByLabel('UserId:');
        this.loginPrivate = page.getByRole('button', { name: 'Login Private' });

    }

    async goto() {
        await this.page.goto('https://portalsys3.lansforsakringar.se/snabben/');
      }

    async selectEnvironment(environment){
        await this.environment.selectOption(environment);

    }
   
    async eneterCustomerNumber(customerNo){
        await this.personnumber.fill(customerNo);
    }

    async clickPrivateLogin(){
        await this.loginPrivate.click();
    }

    async privateLogin(customerNumber, env){
        await this.selectEnvironment(env);
        await this.eneterCustomerNumber(customerNumber)
        await this.clickPrivateLogin();
    }
    
}