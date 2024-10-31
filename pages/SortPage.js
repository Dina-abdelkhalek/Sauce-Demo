exports.SortPage =
    class SortPage {
        constructor(page)
        {
         this.page = page;
         //Sorting the products 
            this.sortProduct = 'select[data-test="product-sort-container"]'
        }

   
        async selectSortOption(option)
            {
            await this.page.waitForSelector(this.sortProduct);
            await this.page.selectOption(this.sortProduct, option);
            }
      

    }