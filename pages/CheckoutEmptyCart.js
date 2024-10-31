exports.CheckoutEmptyCart =
    class CheckoutEmptyCart {
        constructor(page) {
            this.page = page;
            // checkout 
            this.checkOutButton = 'button[data-test="checkout"]';
            // first name
            this.firstName = 'input[data-test="firstName"]';
            //last name
            this.lastName = 'input[data-test="lastName"]';
            //postalcode 
            this.psotalCode = 'input[data-test="postalCode"]';
            //continue 
            this.continueButton = 'input[data-test="continue"]';
            // finish 
            this.finishButton = 'button[data-test="finish"]';
            //back to home 
            this.backHomeButton = 'button[data-test="back-to-products"]';
        }

        async emptyCartDetails(first_name, last_name, postal_code) {
            await this.page.locator(this.checkOutButton).click();
            await this.page.locator(this.firstName).fill(first_name);
            await this.page.locator(this.lastName).fill(last_name);
            await this.page.locator(this.psotalCode).fill(postal_code);
            await this.page.waitForTimeout(800);
            await this.page.locator(this.continueButton).click();
            await this.page.waitForTimeout(800);
            await this.page.locator(this.finishButton).click();
            await this.page.waitForTimeout(800);
            await this.page.locator(this.backHomeButton).click();
            await this.page.waitForTimeout(800);

        }


    }

