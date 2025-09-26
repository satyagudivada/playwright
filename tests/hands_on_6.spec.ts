import {test, chromium} from 'playwright/test';
 
test("Chapter 6_Handson ID Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    await page.locator('id=email').fill('abcd@gmail.com');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson Name Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/newtours/');
    await page.locator('//input[@name="userName"]').fill('ABCD');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson Class Name Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    await page.locator('(//input[@class="inputtext"])[1]').fill('abcd@gmail.com');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson Tag Name Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    await page.locator('//textarea[@title="Search"]').fill('ABCD');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson Link Text Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    await page.locator('//a[text()="Gmail"]').click();
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson Partial Link Text Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    await page.locator('//a[contains(text(),"How Search")]').click();
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson CSS ID Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    await page.locator('#email').fill('abcd@gmail.com');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson CSS ID and Tag Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    await page.locator('//input[@id="email"]').fill('abcd@gmail.com');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson CSS class Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    await page.locator('.inputtext[name="email"]').fill('abcd@gmail.com');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson CSS class and tag Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    await page.locator('input.inputtext[name="email"]').fill('abcd@gmail.com');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson CSS attribute and tag Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    await page.locator('input[type="password"]').fill('abcd1234');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson CSS attribute and tag Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    await page.locator('input.inputtext[type="text"]').fill('abcd@gmail.com');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson Xpath by single / locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    await page.locator('//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/table[1]/tbody[1]/tr[2]/td[1]/input[1]').fill('abcd@gmail.com');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson xpath double Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    await page.locator('//input[@id="email"]').fill('abcd@gmail.com');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson xpath contains Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    await page.locator('//input[contains(@id,"email")]').fill('abcd@gmail.com');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson xpath text Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    const text = await page.locator('//center[text()="This is DEMO site for TESTING purpose"]').innerText();
    console.log(text);
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson xpath function starts-with Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/facebook.html');
    const text = await page.locator('//center[starts-with(text(),"This is DEMO site")]').innerText();
    console.log(text);
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson xpath function last Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('(//input[@type="checkbox"])[last()]').click();
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson chained xpath Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//div[@class="form-group"]//input[@id="phone"]').fill('1234567890');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson chained css selector Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('div.form-group input#phone').fill('1234567890');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson relative above Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/newtours/');
    await page.locator('//input[@name="password"]/preceding::input[1]').fill('ABCD');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson relative below Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/newtours/');
    await page.locator('//input[@name="userName"]/following::input[1]').fill('ABCD1234');
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson relative toLeftof Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//input[@id="female"]/preceding::input[@id="male"][1]').click();
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson relative toRightof Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//input[@id="male"]/following::input[@id="female"][1]').click();
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson relative near Locator",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/newtours/');
    await page.locator('//input[@name="password"]/following::input[@type="submit"][1]').click();
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson Single Shadow DOM",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://dev.automationtesting.in/shadow-dom');
    const text = await page.locator('#shadow-root #shadow-element ').innerText();
    console.log(text);
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson Nested Shadow DOM",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://dev.automationtesting.in/shadow-dom');
    const text = await page.locator('#inner-shadow-dom #nested-shadow-element').innerText();
    console.log(text);
    await page.waitForTimeout(2000);
    await browser.close();
});
 
test("Chapter 6_Handson Multi Nested Shadow DOM",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://dev.automationtesting.in/shadow-dom');
    const text = await page.locator('#nested-shadow-dom #multi-nested-shadow-element').innerText();
    console.log(text);
    await page.waitForTimeout(2000);
    await browser.close();
});
 