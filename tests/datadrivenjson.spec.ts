import {test,expect, chromium} from '@playwright/test'
import * as json11 from './testdata/datadriven.json'  
test('datadriven json',async()=>{
    const browser=await chromium.launch({headless:false});
    const context =await browser.newContext();
    const page=await context.newPage()
    const page1=await context.newPage()
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('#user-name').fill(json11.Valid_Username);
    await page.locator('#password').fill(json11.Valid_password);
    await page.click('#login-button')
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
    await page.waitForTimeout(2000);
    await page.close()
    


    await page1.goto('https://www.saucedemo.com/v1/');
    await page1.locator('#user-name').fill(json11.Invalid_Username1);
    await page1.locator('#password').fill(json11.Invalid_password2);
    await page1.click('#login-button');
    const login= page1.locator('h3[data-test="error"]');
    await expect(login).toHaveText("Epic sadface: Username and password do not match any user in this service")
    // await expect(page1.locator('h3[data-test="error')).toHaveText('Epic sadface: Username and password do not match any user in this service')
    await page1.close()
})