import {test,chromium} from '@playwright/test'
// test('test_1',async()=>{
//     const browser=await chromium.launch({headless:false})
//     const page=await browser.newPage();
//     await page.goto("https://www.easemytrip.com/" );
//     await page.click('//a[@class="_actvrmenu"]');
//     await page.click('//input[@id="FromSector_show"]');
//     await page.locator('//input[@id="a_FromSector_show"]').type('Coimbatore');
//     await page.click('//span[@id="spnCoimbatore"]');
//     await page.waitForTimeout(2000);
//     await page.locator('//input[@id="Editbox13_show"]');
//     await page.locator('//input[@id="a_Editbox13_show"]').type('Chennai');
//     await page.click('//span[text()="Chennai(MAA)"]');
//     await page.waitForTimeout(2000);
//     await page.click("//li[@id='fst_6_06/09/2025']");
//     await page.click('//input[@class="srchBtnSe"]');
//     await page.waitForTimeout(2000);
//     await page.click("//div[@id=0]");
//     console.log("first flight details:", await page.locator("//div[@class='flght-deta ng-scope']").innerText());
//     await page.click('//input[@id="chkSeniorCitizen"]');
//     await page.click('//input[@id="btnSrch"]');
//     await page.click('//div[@id="17"]');
//     const last_fight= await page.locator('//div[@class="flght-deta ng-scope"]').innerText();
//     console.log('last_flight Details',last_fight);
// })






test('test5',async()=>{
    const browser=await chromium.launch({headless:false});
    const page=await browser.newPage();
    await page.goto('https://www.easemytrip.com/');
    await page.click('//span[text()="Trains"]');
    await page.locator('//input[@id="txtfromcity"]').type('coimbatore');
   // await page.waitForTimeout(2000);
    await page.click('//div[text()="Coimbatore- All Stations(CBE)"]');
   // await page.waitForTimeout(2000);

    await page.locator('//input[@id="txtdesticity"]').type('Chennai');
    // await page.waitForTimeout(2000);
    await page.click('//div[text()="Chennai - All Stations(MAS)"]');
    // await page.waitForTimeout(2000);
    
    await page.click('//input[@id="txtDate"]');
    // await page.waitForTimeout(2000);
    await page.click('(//A[@class="ui-state-default"])[1]');
    // await page.waitForTimeout(2000);
    await page.click('//input[@id="SearchAll"]');//search
    await page.click('//li[@id="a"]')//train name
    const avaliable_data=await page.locator('//div[@class="tr-inner"]').first().innerText()
    console.log('first avaliable_data:',avaliable_data);
    
    await page.click('//li[@id="f"]');

    const duration=await page.locator('//div[@class="bodydiv"]').first().innerText();
    console.log("first_duration:",duration);

    await page.click('(//li[@class=" txt txt"])[3]');

    const arrives=await page.locator('//div[@class="bodydiv"]').first().innerText();
    console.log('first_arrives:',arrives);


})