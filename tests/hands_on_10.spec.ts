import { test, chromium } from '@playwright/test';
test('test1', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.easemytrip.com/");
  await page.click("//a[@class='_actvrmenu']");
  await page.click("//input[@id='FromSector_show']");
  await page.locator("//input[@id='a_FromSector_show']").type('Coimbatore',{delay:100});
  await page.click("//span[@id='spnCoimbatore']");
  await page.locator('[id="a_Editbox13_show"]').type('Chennai',{delay:100});
  await page.click("//span[@id='spnChennai']");
  await page.click("li[id='fst_3_03/09/2025']");
  await page.waitForTimeout(2000);
  await page.click("[id='divSearchFlight']");
  await page.waitForTimeout(5000);
  await page.click("//div[@id='0']");
  console.log('First flight details are:',await page.locator("//div[@id='divFlightDetailSec0']").innerText());
  await page.waitForTimeout(2000);
  await page.click("//input[@id='chkSeniorCitizen']");
  await page.waitForTimeout(2000);
  await page.click("//input[@id='btnSrch']");
  await page.click("//div[@id='31']");
  console.log('last flight details are:',await page.locator("//div[@class='flght-deta ng-scope']").innerText());
  await browser.close();
});
test('testcase2',async()=>{
     const browser = await chromium.launch({headless:false})
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://www.easemytrip.com/')
     await page.click('//span[text()="Hotels"]')
    await page.click('[class="hp_city"]');
    await page.locator('[id="txtCity"]').type('Pune',{delay:100})
    await page.click('[id="autohotelCTPNQcity0"]')
   await page.click('[id="txtcid"]')
     await page.click('//div[@class="ui-datepicker-group ui-datepicker-group-first"]/table/tbody/tr/td/a[text()="1"]')
    await page.click('//div[@class="ui-datepicker-group ui-datepicker-group-first"]/table/tbody/tr/td/a[text()="2"]')
    await page.click('[id="exithotelroom"]')
     await page.click('[id="btnSearch"]')
     await page.waitForTimeout(3000)
     await page.waitForLoadState("domcontentloaded");
     console.log("hotel details are:",await page.locator("(//div[@class='content-dtl'])[1]").innerText());
     console.log(await page.locator("(//div[@class='price-dtl'])[1]").innerText());
     await page.waitForTimeout(2000);
     await page.click("//div[@class='drp-bx uparr ng-tns-c3308290766-1']");
     await page.waitForTimeout(2000);
     await page.click("//div[text()='Low to High']");
      await page.waitForTimeout(2000);
      console.log("hotel details are:",await page.locator("(//div[@class='content-dtl'])[10]").innerText());
      console.log(await page.locator("(//div[@class='price-dtl'])[10]").innerText());
      await browser.close();
});
test('3.Search the Flight and hotels in EaseMyTrip and print first available hotel details and flight details. Use Explicit wait for page loading.',async()=>{
    const browser=await chromium.launch({headless:false})
    const page=await browser.newPage()
    await page.goto('https://www.easemytrip.com/')
    await page.click('//span[text()="Flight + Hotel"]')
    await page.locator('[class="inpufph"]').nth(0).click()
    await page.locator('[id="txtAutoOrgLoc"]').type('Coimbatore')
    await page.click("//span[text()='Coimbatore(CJB)']")
    await page.locator('[class="inpufph"]').nth(1).click()
    await page.locator('[id="txtAutoDesLoc"]').type('Chennai')
    await page.click("//span[text()='Chennai(MAA)']")
    await page.click("(//div[text()='Travel Date '])[1]")
    await page.click('//tbody[@class="mat-calendar-body"]/tr/td/button/span[text()=" 4 "]')
    await page.click('//div[text()="Rooms & Nights "]')
    await page.click('(//a[text()="Done"])[1]')
    await page.click('//div[text()="Guests & Class "]')
    await page.click('//a[text()="Done"]')
    await page.click('button[type="submit"]')
    await page.waitForLoadState('domcontentloaded')
    console.log('First hotel details: ',await page.locator('[class="_htdetlis"]').first().innerText())
    await page.locator('[class="viewBtn"]').first().click()
    await page.waitForLoadState('domcontentloaded')
    console.log(await page.locator('[class="fly-part-del"]').innerText())
    await page.waitForTimeout(2000)
})
test('testcase4',async()=>{
    const browser = await chromium.launch({headless:false})
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.easemytrip.com/");
    await page.click("//span[@class='meuicowidth trainmenuico']");
    await page.locator("//input[@id='txtfromcity']").type('Coimbatore',{delay:100});
    //await page.click('//span[@class="_3sXO"]');
    await page.click("//div[text()='Coimbatore- All Stations(CBE)']");
    await page.locator('//input[@id="txtdesticity"]').type('Chennai',{delay:100});
    await page.click("//div[text()='Chennai - All Stations(MAS)']");
    await page.click('[id="txtDate"]')
    await page.click('//div[@class="ui-datepicker-group ui-datepicker-group-first"]/table/tbody/tr/td/a[text()="4"]');
    await page.click('//input[@id="SearchAll"]');
    const train_details=await page.locator("//div[@class='bodydiv']").first().innerText();
    console.log(train_details)
    await page.locator('//div[@class="tr-view label"]').first().click();
    const rowcount=await page.locator('//table[@class="if-table-statn"]/tbody/tr').count();
    const colcount=await page.locator('//table[@class="if-table-statn"]/tbody/tr/td').count();
    console.log(await page.locator('//table[@class="if-table-statn"]/tbody/tr/th').allTextContents())
    const route=await page.locator('td[class="ng-binding"]').allTextContents();
    console.log("route:",rowcount,colcount)
    route.forEach((val)=>{
        console.log(val)
    })
})
test('testcase5',async()=>{
    const browser = await chromium.launch({headless:false})
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.easemytrip.com/");
    await page.click("//span[@class='meuicowidth trainmenuico']");
    await page.locator("//input[@id='txtfromcity']").type('Coimbatore',{delay:100});
    //await page.click('//span[@class="_3sXO"]');
    await page.click("//div[text()='Coimbatore- All Stations(CBE)']");
    await page.locator('//input[@id="txtdesticity"]').type('Chennai',{delay:100});
    await page.click("//div[text()='Chennai - All Stations(MAS)']");
    await page.click('[id="txtDate"]')
    await page.click('//div[@class="ui-datepicker-group ui-datepicker-group-first"]/table/tbody/tr/td/a[text()="30"]');
    await page.click('//input[@id="SearchAll"]');
    await page.click("//li[contains(text(),'Train Name')]");
    await page.waitForTimeout(2000)
    console.log("Sort By Train Name :",await page.locator("(//div[@class='bodydiv'])[1]").innerText());
    // await page.waitForSelector("//li[contains(text(),'Depart')]")
    await page.locator("//li[contains(text(),'Depart')]").nth(1).click();
    // await page.waitForSelector("li[id='d']", { state: "visible" });
    // await page.click("li[id='d']"); // Departure
    console.log("Sort By Department :",await page.locator("(//div[@class='bodydiv'])[1]").innerText());
    await page.click("//li[contains(text(),'Duration')]");//[id="divList"]
    console.log("Sort By Duration :",await page.locator("(//div[@class='bodydiv'])[1]").innerText());
    await page.locator("//li[contains(text(),'Arrive')]").nth(1).click();
    // await page.waitForSelector("li[id='h']", { state: "visible" });
    // await page.click("li[id='h']");
    console.log("Sort By Arrivial :",await page.locator("(//div[@class='bodydiv'])[1]").innerText());
    await browser.close()
});
 