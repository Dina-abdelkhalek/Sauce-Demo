exports.ProductPage =
    class ProductPage
    {
        constructor(page) {
            this.page = page;
            // buy first item 
            this.firstItem = '#add-to-cart-sauce-labs-onesie';
            // buy second item
            this.secondItem = 'button[name="add-to-cart-test.allthethings()-t-shirt-(red)"]';
            // buy third item
            this.thirdItem = '#add-to-cart-sauce-labs-backpack';
            // buy fourth item 
            this.fourthItem = '#add-to-cart-sauce-labs-bolt-t-shirt';
        }

        async addParoduct() {
            await this.page.locator(this.firstItem).click();
            await this.page.locator(this.secondItem).click();
            //await this.page.waitForTimeout(1000);
            await this.page.locator(this.thirdItem).click();
            await this.page.locator(this.fourthItem).click();
            await this.page.evaluate(() => window.scrollTo(0, 0));
            await this.page.waitForTimeout(1000);
        }



    }
