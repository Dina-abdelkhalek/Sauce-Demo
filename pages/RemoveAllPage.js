exports.RemoveAllPage =
    class RemoveProduct {
        constructor(page) {
            this.page = page;
            this.backpackRemove = 'button[data-test="remove-sauce-labs-backpack"]';
            this.boltTShirtRemove = 'button[data-test="remove-sauce-labs-bolt-t-shirt"]';
            this.redTShirtRemove = 'button[data-test="remove-test.allthethings()-t-shirt-(red)"]';
        }

        async removeAllProdect() {
            await this.page.locator(this.backpackRemove).click();
            await this.page.locator(this.boltTShirtRemove).click();
            await this.page.locator(this.redTShirtRemove).click();

        }



    }

