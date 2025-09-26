import {test,chromium} from '@playwright/test'
// test('switching to iframe',async()=>{
//     const browser=await chromium.launch({headless:false});
//     const page=await browser.newPage();
//     await page.goto('https://www.w3schools.com/html/html_iframe.asp')
//     const frame=page.frameLocator('iframe[title="W3Schools HTML Tutorial"]');
//     //await page.waitForTimeout(2000);
//     const sql=frame.locator('//a[text()="SQL"]');
//     //await page.waitForTimeout(2000);
//     await sql.click();
//     await page.waitForTimeout(1000);
//     await page.locator('//a[text()="JAVA"]').click();
//     await page.waitForTimeout(2000);
// })
// switching to new tab
// const { chromium } = require('playwright');

test("switching to new tab",async()=>{
const browser = await chromium.launch({headless:false});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://testautomationpractice.blogspot.com/');
await page.waitForTimeout(3000);
const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.click('//button[text()="New Tab"]')
   
]);
 await page.waitForTimeout(3000);
//await newTab.screenshot({path:"photo.png"});
//await newTab.screenshot({path:"homepage.png", fullPage:true});
});
