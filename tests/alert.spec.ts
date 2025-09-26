import {test,chromium} from '@playwright/test'
test('alert11',async()=>{
   const browser=await chromium.launch({headless:false});
   const page=await browser.newPage();
   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
   await page.waitForTimeout(2000);
   //await page.click('//button[text()="Simple Alert"]');
    page.on('dialog',(dialog)=>{
    await page.waitForTimeout(2000);
    console.log(dialog.message());
    dialog.accept();
   })
await page.click('//button[text()="Simple Alert"]');

});