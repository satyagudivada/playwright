import {test} from '@playwright/test'
test('sample to swag labs',async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/index.html');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('id=password').fill('secret_sauce');
    //await page.locator('id="login-button"').click();
    await page.locator('input[type="submit"]').click();
    
    await page.locator('//div[text()="Sauce Labs Bolt T-Shirt"]/../../..//button[text()="ADD TO CART"]').click();
    //await page.waitForTimeout(2000);
    //await page.locator('//div[text()="Sauce Labs Bolt T-Shirt"]/../../..//button[text()="REMOVE"]').click();
    await page.waitForTimeout(1000);
    await page.locator('//a[contains(@href,"./cart")]').click();
    await page.waitForTimeout(1000);
    await page.locator('//a[text()="CHECKOUT"]').click();
    await page.waitForTimeout(1000);
    await page.locator('id=first-name').fill('satya');
    await page.waitForTimeout(2000);
    await page.locator("#last-name").fill("gudivada");
    await page.waitForTimeout(2000);
    await page.locator('id=postal-code').fill('521345');
    await page.waitForTimeout(2000);
    await page.locator('//input[@class="btn_primary cart_button"]').click();
    await page.waitForTimeout(1000);
    //await page.locator('//a[text()="CANCEL"]').click();
    // await page.waitForTimeout(1000);
    await page.locator('//a[contains(@class,"btn_action cart_button")]').click();
    await page.waitForTimeout(2000);
});