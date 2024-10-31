exports.RemoveProductPage =
    class RemoveProduct
    {
       constructor(page) {
            this.page = page;
            // card button 
            this.cardButton = 'a[data-test="shopping-cart-link"]';
            // press on remove button
           this.removeButton = 'button[data-test="remove-sauce-labs-onesie"]';
        }

       async removeProdect() {
           await this.page.locator(this.cardButton).click();
           await this.page.waitForTimeout(1000);
           await this.page.locator(this.removeButton).click();    
           //await this.page.evaluate(() => window.scrollBy(0, 1000));
        }


  
  }
