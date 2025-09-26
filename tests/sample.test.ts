import {test} from '@playwright/test';
test('sample login test',async({page})=>{
    await page.goto('https://www.facebook.com/');
    await page.locator('#email').fill('satya@getMaxListeners.com');
    await page.locator('id=pass').fill('satya123');
    await page.locator('button[type="submit"]').click();
    //syntax tagname[attributename="atrrivalue"]
});