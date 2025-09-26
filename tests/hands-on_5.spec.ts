import {test, chromium} from '@playwright/test';
test('handson5',async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://www.google.com/");
    const searchbar = page.locator("//textarea[@name='q']");
    await searchbar.fill("one cognizant");
    await searchbar.press('Enter');
    // await page.click('input[type="submit"]');
    await page.waitForTimeout(1000);
    const resultStatus = await page.locator('//div[@id="result-stats"]').first().innerText();
    console.log('Search Result Status:',resultStatus);
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test('trutime', async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://onecognizant.cognizant.com/Home");
 
  await page.waitForSelector('//a[@class="navbar-brand oneCNavTitleLink text-truncate oneC_brandName"]');
  const isLogoVisible = await page.locator('//a[@class="navbar-brand oneCNavTitleLink text-truncate oneC_brandName"]').isVisible();
  console.log('Logo visible:', isLogoVisible);
  await page.fill('input[id="oneC_searchLanding"]','TruTime');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  await page.click('(//div[@aria-label="TruTime "])[2]');
  await page.waitForTimeout(1000);
  const monavg = page.locator("//div[text()='Month Avg.']");
  await page.waitForTimeout(1000);
  const yearavg = page.locator("//div[text()='Year Avg.']");
  await page.waitForTimeout(1000);
  const monthYear = page.locator("div[class=month-input-container]");
  await browser.close();
});
 
 