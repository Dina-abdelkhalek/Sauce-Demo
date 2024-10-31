exports.LogoutPage =
    class LogoutPage {

        constructor(page) {
            this.page = page;

            this.menuPage = '#react-burger-menu-btn';
            this.logoutButton = 'a[data-test="logout-sidebar-link"]';
        }

        async Logout() {
            await this.page.locator(this.menuPage).click();
            await this.page.locator(this.logoutButton).click();

        }
    }
