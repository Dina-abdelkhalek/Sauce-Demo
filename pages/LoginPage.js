exports.LoginPage =
class LoginPage {

    constructor(page) {
        this.page = page;
        this.userName = 'input[name="user-name"]';
        this.loginPassword = 'input[name="password"]';
        this.loginButton = 'input[name="login-button"]';
    }


    async gotoLoginPage() {
        await this.page.setViewportSize({ width: 1370, height: 730 });
        await this.page.goto("https://www.saucedemo.com/");
        }

    async Login(username, password) {
        await this.page.locator(this.userName).fill(username);
        await this.page.locator(this.loginPassword).fill(password);
        await this.page.locator(this.loginButton).click();

    }
}