import {test,chromium} from '@playwright/test';
test('testcase1',async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://www.globalsqa.com/demo-   site/frames-and-windows/#iFrame");
    await page.click("//a[@class='no_border']")
    await page.waitForLoadState('domcontentloaded')    
    const book = await page.locator(".wp-block-list li").allInnerTexts();
    await page.waitForTimeout(2000);
    book.forEach((items)=>{
        console.log(items);
    });
    await page.goBack();
})
test('testcase2', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
  await page.waitForTimeout(1000);
  await page.click("(//a[text()='CheatSheets'])[1]");
  await page.waitForTimeout(1000);
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click("//a[text()='SQL Cheat Sheet']")
  ]);
  await newPage.waitForTimeout(1000);
  console.log(await newPage.locator("(//span[@class='has-inline-color has-very-dark-gray-color'])[1]").innerText());
  await newPage.waitForTimeout(1000);
  await newPage.close();
  await browser.close();
});
test('3. Verify button color in newly opened browser tab',async()=>{
    const browser=await chromium.launch({headless:false})
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://www.globalsqa.com/demo-   site/frames-and-windows/')
    const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        page.click("(//a[text()='Click Here'])[1]")
 
    ])
    const colorbtn=await newPage.locator("(//a[text()='Click Here'])[1]")
    const color_of_button=await colorbtn.evaluate((element) =>
    window.getComputedStyle(element).backgroundColor)
    console.log("color of the Click me button color: ",color_of_button)
    await colorbtn.hover()
    const color_of_button_hover=await colorbtn.evaluate((element) =>
    window.getComputedStyle(element).backgroundColor)
    console.log("Color of the click me button after hover : ",color_of_button_hover);
    await browser.close()
})
 
 test('4. Searching Hotels in EaseMyTrip app and   print first available hotel AMENITIES',async()=>{
    const browser = await chromium.launch({headless:false})
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://www.easemytrip.com/')
     await page.click('//span[text()="Hotels"]')
    await page.click('[class="hp_city"]')
    await page.locator('[id="txtCity"]').type('Pune',{delay:100})
    await page.click('[id="autohotelCTPNQcity0"]')
   await page.click('[id="txtcid"]')
     await page.click('//div[@class="ui-datepicker-group ui-datepicker-group-first"]/table/tbody/tr/td/a[text()="1"]')
    await page.click('//div[@class="ui-datepicker-group ui-datepicker-group-first"]/table/tbody/tr/td/a[text()="2"]')
    await page.click('[id="exithotelroom"]')
     await page.click('[id="btnSearch"]')
     await page.waitForTimeout(3000)
    const First_Hotel_link=page.locator('//result-tupple/div/div/div/div/div/div/div/div/span/a').nth(0) ////span/a[contains(@href, "hotel")]
    const First_Hotel=await First_Hotel_link.textContent()
     console.log('First Hotel that appeared :',First_Hotel)
    const [newPage]= await Promise.all([
        context.waitForEvent('page'),
         First_Hotel_link.click()
     ])
     await newPage.click("//a[text()='Amenities']")
     const AmenitiesLocator = newPage.locator("//div[text()='Amenities']/../div/div/div/ul/li");
     const count = await AmenitiesLocator.count();
 
   console.log('Amenities are:')
   for (let i = 0; i < count; i++) {
       const itemHTML = await AmenitiesLocator.nth(i).textContent();
        console.log(`${i+1}: ${itemHTML}`);
   }
    await page.waitForTimeout(2000)
    await browser.close()
});