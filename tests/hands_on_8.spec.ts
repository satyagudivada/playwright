import { test, chromium } from '@playwright/test';
// test("scenario-1",async()=>{
//     const browser=await chromium.launch({headless:false});
//     const context=await browser.newContext();
//     const page=await context.newPage();
//     await page.goto('https://www.browserstack.com/');
//     const start_button = page.locator('//a[text()="Get started free"]');
//     const color=start_button.evaluate(el=>window.getComputedStyle(el).backgroundColor );
//     console.log(color);
//     await start_button.hover();
//     const hovercolor=await start_button.evaluate(el=>window.getComputedStyle(el).backgroundColor);
//     console.log(hovercolor);
//     const viewPricingButton = await page.locator('text=View Pricing');
//     await viewPricingButton.scrollIntoViewIfNeeded();
//     await viewPricingButton.hover();
//     await viewPricingButton.click();
    
// })
test('scenario-2',async()=>{
    const browser=await chromium.launch({headless:false});
    const page=await browser.newPage();
    await page.goto('https://demo.guru99.com/test/tooltip.html');
    const dowload=await page.locator('a[id="download_now"]');
    //await page.waitForTimeout(2000);
    await dowload.hover();
    await page.waitForTimeout(2000);

})



// test('testcase1', async () => {
//   const browser = await chromium.launch({ headless: false });
//   const user = await browser.newContext();
//   const page = await user.newPage();
//   await page.goto("https://www.browserstack.com/");
//   const submitbutton = page.locator("//a[text()='Get started free']");
//   const initialColor = await submitbutton.evaluate(el => window.getComputedStyle(el).backgroundColor);
//   console.log(initialColor);
//   await submitbutton.hover();
//   const hoverColor = await submitbutton.evaluate(el => window.getComputedStyle(el).backgroundColor);
//   console.log(hoverColor);
//   await browser.close();
// });
 
//  test('testcase2', async () => {
//   const browser = await chromium.launch({ headless: false });
//   const user = await browser.newContext();
//   const page = await user.newPage();
//   await page.goto("https://www.browserstack.com/");
//   const demobutton = page.locator("//a[text()='Live']");
//   await demobutton.dblclick();
//   await browser.close();
//  });
 
// test('testcase3', async () => {
//   const browser = await chromium.launch({ headless: false });
//   const user = await browser.newContext();
//   const page = await user.newPage();
//   await page.goto("https://demo.guru99.com/test/upload/");
//   await page.setInputFiles("//input[@id='uploadfile_0']", 'C:/Users/2430034/OneDrive - Cognizant/Documents/5 whys ppt.pptx');
//   await page.check("//input[@class='field_check']");
//   await page.click("//button[@id='submitbutton']");
//   await page.waitForSelector("//center");
//   const message = await page.textContent("//center");
//   console.log(message);
//   await browser.close();
// });
 
// test('testcase4', async () => {
//   const browser = await chromium.launch({ headless: false });
//   const user = await browser.newContext();
//   const page = await user.newPage();
//   await page.goto("https://demo.guru99.com/test/tooltip.html");
//   await page.hover("//a[@id='download_now']");
//   await page.waitForSelector("//div[@class='tooltip']");
//   const tooltipText = await page.textContent("//div[@class='tooltip']");
//   console.log(tooltipText);
//   await browser.close();
// });
 
// test('testcase5', async () => {
//   const browser = await chromium.launch({ headless: false });
//   const user = await browser.newContext();
//   const page = await user.newPage();
//   await page.goto("https://demo.guru99.com/test/drag_drop.html");
//   await page.locator("//li[@data-id='5']").dragTo(page.locator("//ol[@class='field14 ui-droppable ui-sortable']"));
//   await page.waitForTimeout(1000);
//   await page.locator("//li[@data-id='2']").dragTo(page.locator("//ol[@class='field15 ui-droppable ui-sortable']"));
//   await page.waitForTimeout(1000);
//   await page.locator("(//li[@data-id='2'])[1]").dragTo(page.locator("(//ol[@class='field13 ui-droppable ui-sortable'])[1]"));
//   await page.waitForTimeout(1000);
//   await page.locator("(//li[@data-id='2'])[2]").dragTo(page.locator("(//ol[@class='field13 ui-droppable ui-sortable'])[2]"));
//   await page.waitForTimeout(1000);
//   const result = await page.textContent('#equal');
//   console.log('Verification Result:', result?.trim());
//   console.log(result?.includes('Perfect!') ? 'Drag-and-drop actions verified successfully.' : 'Verification failed.');
//   await browser.close();
// });
 
// test('testcase6', async () => {
//   const browser = await chromium.launch({ headless: false });
//   const context = await browser.newContext({ permissions: ['clipboard-read', 'clipboard-write'] });
//   const page = await context.newPage();
//   await page.goto('https://www.tutorialspoint.com/selenium/practice/register.php');
//   await page.fill('#firstname', 'Selenium');
//   await page.fill('#lastname', 'Test123456');
//   await page.dblclick('#firstname');
//   await page.keyboard.press('Control+C');
//   await page.focus('#username');
//   await page.keyboard.press('Control+V');
//   await page.dblclick('#lastname');
//   await page.keyboard.press('Control+C');
//   await page.focus('#password');
//   await page.keyboard.press('Control+V');
//   await page.click('#register');
//   const values = await Promise.all([
//     page.inputValue('#firstname'),
//     page.inputValue('#lastname'),
//     page.inputValue('#username'),
//     page.inputValue('#password')
//   ]);
//   console.log(values.every(v => v === '') ? 'Form reset successfully after registration.' : 'Form values still present after registration.');
//   await browser.close();
// });
 
// test('testcase7', async () => {
//   const browser = await chromium.launch({ headless: false });
//   const user = await browser.newContext();
//   const page = await user.newPage();
//   await page.goto('https://www.tutorialspoint.com/selenium/practice/browser-windows.php');
//   const [newTab] = await Promise.all([user.waitForEvent('page'), page.click('#tabButton')]);
//   await newTab.waitForLoadState();
//   console.log('New Tab Header:', await newTab.locator('h1').textContent());
//   await newTab.close();
//   const [newWindow] = await Promise.all([user.waitForEvent('page'), page.click('#windowButton')]);
//   await newWindow.waitForLoadState();
//   console.log('New Window Header:', await newWindow.locator('h1').textContent());
//   await newWindow.close();
//   const [messageWindow] = await Promise.all([user.waitForEvent('page'), page.click('#messageWindowButton')]);
//   await messageWindow.waitForLoadState();
//   console.log('Message Window Content:', await messageWindow.locator('body').textContent());
//   await messageWindow.close();
//   await browser.close();
// });
 
// test('testcase8', async () => {
//   const browser = await chromium.launch({ headless: false });
//   const user = await browser.newContext();
//   const page = await user.newPage();
//   await page.goto("https://www.tutorialspoint.com/selenium/practice/frames.php");
//   const outerFrame = page.frameLocator('#frame1');
//   const innerFrame = outerFrame.frameLocator('iframe');
//   const content = await innerFrame.locator('body').textContent();
//   console.log('Nested Frame Content:', content?.trim());
//   await browser.close();
// });
 
// test('testcase9', async () => {
//   const browser = await chromium.launch({ headless: false });
//   const user = await browser.newContext();
//   const page = await user.newPage();
//   await page.goto("https://demoqa.com/login");
//   await page.fill('#userName', 'Jyotsna_32');
//   await page.fill('#password', '123456575');
//   await page.click('#login');
//   await page.waitForURL('https://demoqa.com/profile');
//   const cookies = await user.cookies();
//   console.log('Cookies Info:');
//   cookies.forEach(cookie => {
//     console.log(`Name: ${cookie.name}`);
//     console.log(`Value: ${cookie.value}`);
//     console.log(`Domain: ${cookie.domain}`);
//     console.log(`Path: ${cookie.path}`);
//     console.log('-------------------------');
//   });
//   await browser.close();
// });
 