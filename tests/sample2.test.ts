//  import {test} from '@playwright/test'
//  test('sample w3schools',async({page})=>{
//     await page.goto('https://profile.w3schools.com/login');
//     await page.locator('//input[contains(@name,"email")]').fill("satya@gmail.com")
    
//     await page.waitForTimeout(2000);
//     await page.locator('//input[contains(@name,"password")]').fill('satya123');
//     await page.waitForTimeout(2000);
//     await page.locator('//button[text()="Sign in"]').click();
//     await page.waitForTimeout(2000);
//  });

import {test} from '@playwright/test'
test('sample w3schools',async({page})=>{
    await page.goto('https://www.w3schools.com/');
    await page.waitForTimeout(2000);
    await page.locator('//a[contains(@class,"ga-nav subtopnav_firstitem")]').click();
    await page.waitForTimeout(2000);
    //await page.locator('.class=w3-right w3-btn').click();
    //await page.waitForTimeout(2000);
})