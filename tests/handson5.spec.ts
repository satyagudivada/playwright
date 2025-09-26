import {test,chromium} from '@playwright/test'
test('google',async()=>{
    const browser=await chromium.launch({headless:false});
    const page=await browser.newPage();
    await page.goto('https://www.google.com/');
    page.locator('svg[class="lnXdpd"]');
    await page.fill('textarea[title="Search"]','Cognizant');
    await page.waitForTimeout(2000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    const result= page.locator('//div[@id="result-stats"]');
    console.log("result=",result.count());
    await page.waitForTimeout(2000);
    await page.close();
});
test('cognizant',async()=>{
    const browser1=await chromium.launch({headless:false});
    const page1=await browser1.newPage();
    await page1.goto('https://onecognizant.cognizant.com/Welcome');
    const logo_visiblity=await page1.locator('a[class="navbar-brand oneCNavTitleLink text-truncate oneC_brandName"]').isVisible();
    console.log('Logo Visibility : ',logo_visiblity);
    await page1.fill('input[id="oneC_searchLanding"]','TruTime');
    await page1.keyboard.press('Enter');
    
})