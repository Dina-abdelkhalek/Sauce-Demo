exports.CancelCheckout =
    class CancelCheckout {
        constructor(page) {
            this.page = page;
            // cancel button 
            this.cancelButton = 'button[data-test="cancel"]';
        }

        async cancelProcess() {
            await this.page.locator(this.cancelButton).click();
        }



    }