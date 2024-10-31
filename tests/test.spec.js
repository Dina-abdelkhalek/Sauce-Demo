const { test } = require('@playwright/test');
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { SortPage } from '../pages/SortPage';
import { RemoveProductPage } from '../pages/RemoveProductPage';
import { FillCheckoutForm } from '../pages/FillCheckoutForm';
import { CancelCheckout } from '../pages/CancelCheckout';
import { RemoveAllPage } from '../pages/RemoveAllPage';
import { CheckoutEmptyCart } from '../pages/CheckoutEmptyCart';
import { LogoutPage } from '../pages/LogoutPage';

test('browser page test', async ({ page }) => {

    //login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('standard_user', 'secret_sauce');
    await page.waitForTimeout(2000);

    //Sorting the products 
    const sorting = new SortPage(page);
    await sorting.selectSortOption('Price (low to high)');
    await page.waitForTimeout(2000);

    //Add products from landing page
    const selectProducts = new ProductPage(page);
    await selectProducts.addParoduct();
    await page.waitForTimeout(4000);

    //Remove product from landing page and View cart products 
    const removeProd = new RemoveProductPage(page);
    await removeProd.removeProdect()
    await page.waitForTimeout(4000);

    //Fill Checkout form
    const checkoutForm = new FillCheckoutForm(page);
    await checkoutForm.cardDetails('Dina', 'Abd-Elkhalek', '01125458');
    await page.waitForTimeout(4000);

    //Canceling checkout 
    const cancelCheckoutProcess = new CancelCheckout(page);
    await cancelCheckoutProcess.cancelProcess();
    await page.waitForTimeout(4000);

    //Remove All products from cart
    const RemoveAllIteams = new RemoveAllPage(page);
    await RemoveAllIteams.removeAllProdect();
    await page.waitForTimeout(2000);

    //Checkout of empty cart
    const CheckoutEmpty = new CheckoutEmptyCart(page);
    await CheckoutEmpty.emptyCartDetails('Dina', 'Abd-Elkhalek', '01125458');
    await page.waitForTimeout(4000);

    //Logout
    const logout = new LogoutPage(page);
    await logout.Logout();
    await page.waitForTimeout(1000);
});