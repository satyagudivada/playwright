import {test,chromium,webkit,firefox} from '@playwright/test'
test('sample to sort',async()=>{
    const browser=await chromium.launch({headless:false});
    const page=await browser.newPage();
    await page.goto('https://www.nike.com/in/w/');
    const menlink=page.locator("//a[text()='Men']");
    await menlink.hover();
    //await page.waitForTimeout(1000);
    await page.click("//a[text()='Men']/..//p[text()='All Shoes']");
    await page.click('button[id="dropdown-btn"]')
    await page.waitForTimeout(2000);
    await page.click('button[value="priceAsc"]');
    await page.waitForTimeout(2000);
    const shoe=await page.locator('(//img[@class="product-card__hero-image css-1fxh5tw"])[2]');
    await shoe.screenshot({path:'C:/Users/2430330/OneDrive - Cognizant/Desktop/shoe.png'});

})