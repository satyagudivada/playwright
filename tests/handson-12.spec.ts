import {test,chromium} from 'playwright/test';
 
// test("Chapter 12 Handson 1", async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://www.saucedemo.com/v1/');
//     await page.waitForTimeout(2000);
 
//     await page.fill('#user-name','standard_user');
//     await page.waitForTimeout(2000);
//     await page.fill('#password','secret_sauce');
//     await page.waitForTimeout(2000);
 
//     await page.click('#login-button');
//     await page.waitForTimeout(2000);
 
//     test.info().attach("Successful Login",{
//         body: await page.screenshot(),
//         contentType: 'image/png'
//     })
 
//     await browser.close();
// })
 
// test("Chapter 12 Handson 2", async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://www.saucedemo.com/v1/');
//     await page.waitForTimeout(2000);
 
//     await page.fill('#user-name','standard_user');
//     await page.waitForTimeout(2000);
//     await page.fill('#password','secret_saucwwe');
//     await page.waitForTimeout(2000);
 
//     await page.click('#login-button');
//     await page.waitForTimeout(2000);
 
//     test.info().attach("Error Msg",{
//         body: await page.screenshot(),
//         contentType: 'image/png'
//     })
 
//     await browser.close();
   
// })
 
// test("Chapter 12 Handson 3", async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://opensource-demo.orangehrmlive.com/');
//     await page.waitForTimeout(2000);
 
//     await page.getByPlaceholder('Username').fill('Admin');
//     await page.waitForTimeout(2000);
 
//     await page.getByPlaceholder('Password').fill('admin123');
//     await page.waitForTimeout(2000);
   
//     await page.click('button[type="submit"]');
//     await page.waitForTimeout(2000);
 
//     await page.click('//span[text()="PIM"]');
//     await page.waitForTimeout(2000);
 
//     await page.waitForSelector('span:has-text("Configuration")');
//     await page.click('span:has-text("Configuration")');
//     await page.waitForTimeout(2000);
 
//     await page.click('//a[text()="Data Import"]');
//     await page.waitForTimeout(2000);
 
//     await page.locator('input[type="file"]').setInputFiles('C:/Users/2430147/OneDrive - Cognizant/Documents/Test/tests/test.docx'); //It is not accepting any type of file
//     await page.waitForTimeout(2000);
 
//     test.info().attach("Screen after uploading file",{
//         body:await page.screenshot(),
//         contentType: 'image/png'
//     })
 
//     await browser.close();
// })
 
// test("Chapter 12 Handson 4", async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://www.sampledocs.in/');
//     await page.waitForTimeout(2000);
 
//     test.info().attach("Homepage Screen",{
//         body:await page.screenshot(),
//         contentType: 'image/png'
//     })
   
//     await browser.close();
// })
 
// test("Chapter 12 Handson 5", async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/alerts');
//     await page.waitForTimeout(2000);
 
//     let dialogCount = 0;
//     page.on("dialog", async (dialog) => {
//         dialogCount++;
//         if (dialogCount === 1) {
//             await dialog.accept();
//         } else if (dialogCount === 2) {
//             await dialog.dismiss();
//         } else if (dialogCount === 3) {
//             await dialog.accept('Chayan');
//         }
//     });
   
//     await page.click('#alertButton');
//     await page.click('#confirmButton');
//     await page.click('#promtButton');
 
//     const cfmmsg = await page.locator('#confirmResult').innerText();
//     console.log(cfmmsg);
   
//     if(cfmmsg === "You selected Cancel"){
//         console.log("Correct result for confirm pop up box");
//     }
 
//     const pmtmsg = await page.locator('#promptResult').innerText();
//     console.log(pmtmsg);
   
//     if(pmtmsg === "You entered Chayan"){
//         console.log("Correct result for prompt pop up box");
//     }
 
//     await browser.close();
   
// })
 
// test("Chapter 12 Handson 6", async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://www.calculator.net/bmi-calculator.html');
//     await page.waitForTimeout(2000);
 
//     await page.fill('#cage','30');
//     await page.waitForTimeout(2000);
 
//     await page.fill('#cheightmeter','170');
//     await page.waitForTimeout(2000);
 
//     await page.fill('#ckg','60');
//     await page.waitForTimeout(2000);
 
//     await page.click('input[type="submit"]');
//     await page.waitForTimeout(2000);
 
//     const bmiText = await page.getByText('BMI = 20.8 kg/m2 (Normal)').innerText();
   
//     if (bmiText.includes('20.8')) {
//         console.log('BMI is correctly calculated as 20.8');
//     } else {
//         console.error('BMI calculation mismatch. Found:', bmiText);
//     }
 
//     await browser.close();
   
// })
 
// test("Chapter 12 Handson 7", async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/links');
   
//     const links = await page.evaluate(() => {
//         return Array.from(document.querySelectorAll('a')).map(a => a.href);
//     });
   
//     const brokenLinks = [];
   
//     if (Array.isArray(links) && links.length > 0) {
//         for (const link of links) {
//             try {
//                 const response = await page.request.get(link);
//                 const status = response.status();
//                 if (status >= 400) {
//                     brokenLinks.push(link);
//                 } else {
//                     continue;
//                 }
//             } catch (error) {
//                 brokenLinks.push(link);
//             }
//         }
//     } else {
//         console.log("No links found on the page.");
//     }
   
//     console.log("\nBroken Links List:",brokenLinks.length);
 
//     await browser.close();
   
// })
 
test("Chapter 12 Handson 8", async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
 
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
    await page.waitForTimeout(2000);
 
    const btn = page.locator('//input[contains(@name,"btnchkavail")]');
 
    console.log("Check Availability Status:",await btn.isVisible());
    await page.waitForTimeout(2000);
 
    await btn.click();
    await page.waitForTimeout(2000);
 
    console.log("Error Mesasage:", await page.locator('//span[@class="error"]').innerText());
 
    await browser.close();
   
})