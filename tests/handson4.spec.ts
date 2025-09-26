import {test,chromium} from '@playwright/test'
test('handson',async()=>{
    const browser =await chromium.launch({headless:false});
    const page=await browser.newPage();
    await page.goto('https://www.google.com/?zx=1756134158525&no_sw_cr=1');

    const logo= page.locator('svg[class="lnXdpd"]').innerHTML();
    console.log(logo);
    //await page.waitForTimeout(1000);
    
    await page.locator('textarea[class="gLFyf"]').fill('Google');
    
    await page.waitForTimeout(1000);
    await page.click('(//input[@class="gNO89b"])[2]');
    //await page.waitForTimeout(1000);

});

test('TruTime',async()=>{
    const browser1=await chromium.launch({headless:false});
    const page1=await browser1.newPage();
    await page1.goto('https://onecognizant.cognizant.com/Welcome');
    //await page1.waitForTimeout(2000);
    
    await page1.locator('(//div[@class="appColHolder"])[1]').click();
    //await page1.waitForTimeout(1000);

    const current_month_year=page1.locator("//span[text()='August 2025']");
    console.log("current_month=",current_month_year);
    //await page1.waitForTimeout(2000);
    const month_avg= page1.locator('//div[text()="Month Avg."]');
    console.log("month_avg=",month_avg);
    //await page1.waitForTimeout(2000);
    const year_avg= page1.locator('//div[text()="Year Avg."]');
    console.log("year_avg=",year_avg);

    //await page1.waitForTimeout(1000);
    const swipe_avg_month= page1.locator('(//div[@class="swipeAvg MonAvg"])[1]')
    console.log(swipe_avg_month);
    //await page1.waitForTimeout(2000);
    const swipe_year_avg= page1.locator('(//div[@class="swipeAvg MonAvg"])[2]');
    console.log("swipe_yrs=",swipe_year_avg);

    //await page1.waitForTimeout(2000);
    const trutime_month=page1.locator('div[id="A2"]');
    console.log("trutime_Month=",trutime_month)
    //await page1.waitForTimeout(2000);
    const trutime_year=page1.locator('div[id="A3"]');
    console.log("trutime_yrs=",trutime_year)
   // await page1.waitForTimeout(2000);

});


