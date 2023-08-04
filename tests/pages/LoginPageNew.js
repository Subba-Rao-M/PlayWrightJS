exports.LoginPageNew = class LoginPageNew{ // export with same as class name and which will be imported in test case
    constructor(page){
        this.page = page; // refers to current class page object
        this.loginLink = "#login2";
        this.userNameInput = "#loginusername";
        this.passwordInput = "#loginpassword";
        this.loginButton = "//button[normalize-space()='Log in']";
    }

    async goToLoginPage(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async login(UserName, password){
        await this.page.locator(this.loginLink).click(); // this.page is class page and this.loginlink is class specific field
        await this.page.locator(this.userNameInput).fill(UserName);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();

    }









}