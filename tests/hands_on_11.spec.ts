import {test,chromium,expect} from 'playwright/test';
 
test("Chapter 11 Handson 1",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
 
    await page.goto('https://demo.guru99.com/test/web-table-element.php#');
 
    await page.waitForTimeout(2000);
 
    await page.waitForSelector('table.dataTable');
   
    const rowLocator = page.locator('table.dataTable tbody tr', { hasText: 'Power Finance Co'});
   
    const rowText = await rowLocator.first().innerText();
    console.log('Power Finance Co Stock Details:\n', rowText);
})
 
test("Chapter 11 Handson 2",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
 
    await page.goto('https://money.rediff.com/tools/forex');
 
    await page.waitForTimeout(2000);
 
    const rowLocator = page.locator('//tr[td[text()="Singapore Dollar (SGD)"]]');
    const rowText = await rowLocator.innerText();
   
    console.log('Currency Rate:', rowText);
})
 
test("Chapter 11 Handson 3",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
 
    await page.goto('https://emicalculator.net/home-loan-emi-   calculator/');
    await page.waitForTimeout(2000);
 
    await page.fill('#homeprice','200000');
    await page.waitForTimeout(2000);
 
    await page.fill('#downpayment','50');
    await page.waitForTimeout(2000);
 
    await page.fill('#homeloaninsuranceamount','2000');
    await page.waitForTimeout(2000);
 
    await page.fill('#homeloanamount','600000');
    await page.waitForTimeout(2000);
 
    await page.fill('#homeloanterm','10');
    await page.waitForTimeout(2000);
 
    await page.fill('#loanfees','0.50');
    await page.waitForTimeout(2000);
   
    await page.click('#startmonthyear');
    await page.click('//span[text()="Oct"]');
    await page.waitForTimeout(2000);
 
    await page.waitForSelector('#year2030');
    await page.click('#year2030');
    await page.locator('//td[@class="col-3 col-sm-2 col-lg-1 paymentyear toggle toggle-open"]').click();
    await page.waitForTimeout(5000);
 
    console.log(await page.locator('//tr[@id="monthyear2030"]/..//div[@class="monthlypaymentcontainer"]').allInnerTexts());
   
})
 
test("Chapter 11 Handson 4",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
 
    await page.goto('https://emicalculator.net/home-loan-emi-   calculator/');
    await page.waitForTimeout(2000);
 
    await page.fill('#homeprice','200000');
    await page.waitForTimeout(2000);
 
    await page.fill('#downpayment','50');
    await page.waitForTimeout(2000);
 
    await page.fill('#homeloaninsuranceamount','2000');
    await page.waitForTimeout(2000);
 
    await page.fill('#homeloanamount','600000');
    await page.waitForTimeout(2000);
 
    await page.fill('#homeloanterm','10');
    await page.waitForTimeout(2000);
 
    await page.fill('#loanfees','0.50');
    await page.waitForTimeout(2000);
 
    await page.click('#startmonthyear');
    await page.click('//span[text()="Oct"]');
    await page.waitForTimeout(2000);
 
    console.log('Table Details:',await page.locator('table.noextras').allInnerTexts());
})
 
test("Chapter 11 Handson 5",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
 
    await page.goto('https://www.moneyworks4me.com/');
    await page.waitForTimeout(2000);
 
    const funds = page.locator('//h6[text()="Funds:"]');
    await funds.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
 
    await page.click('//a[text()="Best Large Cap Funds"]');
    await page.waitForTimeout(2000);
 
    console.log(await page.locator('//div[@class="table-wrap-portfolio col-md-12 col-lg-11 mx-auto sm-pd-0"]').innerText());
 
})
 