import {test, chromium} from '@playwright/test';
test('google',async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://www.google.com");
    await page.waitForTimeout(2000);
    const uniquelogo = page.locator("svg[class='lnXdpd']")
    await page.waitForTimeout(2000);
    const searchbar = page.locator("textarea[jsname='yZiJbe']").fill("one cognizant");
    const searchbutton = await page.click("(//input[@value='Google Search'])[2]");
    await page.waitForTimeout(2000);
});
test('trutime',async()=>{
    const browser= await chromium.launch({headless:false});
    const page= await browser.newPage();
    await page.goto("https://onecognizant.cognizant.com/Home")
    await page.waitForTimeout(2000);
    const mytrutime = page.click("//p[text()='TruTime ']/../../..//div[@class='appColHolder']");
    await page.waitForTimeout(2000);
    const monthYear = page.locator("div[class=month-input-container]");
    await page.waitForTimeout(2000);
    const monavg = page.locator("//div[text()='Month Avg.']");
    await page.waitForTimeout(2000);
    const yearavg = page.locator("//div[text()='Year Avg.']");
    await page.waitForTimeout(2000);
    const swipeavgmonth = page.locator("(//div[@class='swipeAvg MonAvg'])[1]")
    const swipeavgyear = page.locator("(//div[@class='swipeAvg MonAvg'])[2]")
    await page.waitForTimeout(2000);
    const trutimemonth = page.locator("//div[@id='A2']")
    await page.waitForTimeout(2000);
    const trutimeyear = page.locator("//div[@id='A3']")
    await page.waitForTimeout(2000);
});
 