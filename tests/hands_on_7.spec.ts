import {test, chromium} from 'playwright/test';
 
// test("Chapter 7 Handson 1",async()=>{
//     const browser = await chromium.launch({headless:false});
   
//     const context1 = await browser.newContext();
//     const page1 = await context1.newPage();
 
//     await page1.goto('https://demoqa.com/forms');
//     await page1.waitForTimeout(2000);
 
//     await page1.reload();
//     await page1.waitForTimeout(2000);
 
//     const currURL = await page1.url();
//     console.log("\nURL:",currURL);
 
//     const pageSrc = await page1.content();
//     console.log("\nPage Source:", pageSrc);
 
//     const title = await page1.title();
//     console.log("\nTitle of the Page:", title);
 
//     await page1.waitForTimeout(2000);
//     await page1.goto('https://demoqa.com/text-box');
//     await page1.waitForTimeout(2000);
 
//     await page1.goto('https://demoqa.com/forms');
//     await page1.waitForTimeout(2000);
 
//     const context2 = await browser.newContext();
//     const page2 = await context2.newPage();
 
//     await page2.goto('https://demoqa.com/forms');
//     await page2.waitForTimeout(2000);
 
//     await page2.close();
//     await page1.waitForTimeout(2000);
//     await browser.close();
   
// });
 
// test("Chapter 7 Handson 2",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/text-box');
 
//     await page.locator('//input[@id="userName"]').fill('ABCD');
//     await page.locator('//input[@id="userEmail"]').fill('abcd@gmail.com');
   
//     const fullName = await page.locator('//input[@id="userName"]').inputValue();
//     console.log("\nFull Name:",fullName);
 
//     await page.locator('//button[text()="Submit"]').click();
//     await  page.waitForTimeout(2000);
//     await browser.close();
// });
 
// test("Chapter 7 Handson 3",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/checkbox');
//     await page.waitForTimeout(2000);
 
//     await page.locator('//button[@title="Expand all"]').click();
//     await page.waitForTimeout(2000);
 
//     const cmdCheck = page.locator('//input[@type="checkbox"]/../../..//span[text()="Commands"]');
//     await page.waitForTimeout(2000);
 
//     if (!(await cmdCheck.isChecked())){
//         await cmdCheck.click();
//         await page.waitForTimeout(2000);
//     }
 
//     const classifiedCheck = page.locator('//input[@type="checkbox"]/../../..//span[text()="Classified"]');
//     console.log("\nClassified checkbox visibility status:",await classifiedCheck.isVisible());
 
//     await classifiedCheck.click();
//     await cmdCheck.uncheck();
//     await page.waitForTimeout(2000);
 
//     const excelCheck = page.locator('//input[@type="checkbox"]/../../..//span[text()="Excel File.doc"]');
//     console.log("Excel.file enabled status:",await excelCheck.isEnabled());
 
//     await excelCheck.click();
//     await page.waitForTimeout(2000);
 
//     await page.locator('//input[@type="checkbox"]/../../..//span[text()="Notes"]').click();
//     await page.waitForTimeout(2000);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 4",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/radio-button');
 
//     const no = page.locator('#noRadio');
//     console.log("\n No Radio Enable Status:",await no.isEnabled());
//     console.log("\n No Radio Visible Status:",await no.isVisible());
 
//     const yes = page.locator('label[for="yesRadio"]');
//     if(!(await yes.isChecked())){
//         await yes.check();
//         await page.waitForTimeout(2000);
//     }
 
//     const radios = page.locator('input[type="radio"]');
//     const count = await radios.count();
//     let selectedCount = 0;
   
//     for (let i = 0; i < count; i++) {
//         if (await radios.nth(i).isChecked()) {
//             selectedCount++;
//         }
//     }
   
//     if (selectedCount === 1) {
//         console.log("One radio button is selected.");
//     } else if (selectedCount === 0) {
//         console.log("No radio button is selected.");
//     } else {
//         console.log("More than one radio button is selected — unexpected behavior.");
//     }
// });
 
// test("Chapter 7 Handson 5",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     const submitBtn = page.locator('button[type="submit"]');
//     const [bgColor,tagname,attr] = await submitBtn.evaluate((element)=>{
//         return [window.getComputedStyle(element).backgroundColor,
//             element.tagName.toLowerCase(),
//             element.getAttribute('class')];
//     })
 
//     console.log("Submit Background Color:",bgColor);
//     console.log("Submit Tag Name:",tagname);
//     console.log("Submit Class Attribute:",attr);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 6",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     const currAddr = await page.locator('#currentAddress').boundingBox();
 
//     console.log("Size:", currAddr?.width, currAddr?.height);
//     console.log("Location:", currAddr?.x, currAddr?.y);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 7",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/selectable');
 
//     const list = await page.locator('#verticalListContainer li').allTextContents();
 
//     for (let i of list){
//         console.log(i);
//     }
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 8",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     const state = page.locator('//div[text()="Select State"]');
//     const city = page.locator('//div[text()="Select City"]');
 
//     console.log("State dropdown enable status:", await state.isEnabled());
//     console.log("City dropdown enable status:", await city.isEnabled());
 
//     await state.click();
//     await page.locator('div[id*="react-select-3-option-0"]').click();
//     await page.waitForTimeout(2000);
 
//     await city.click();
//     await page.locator('div[id*="react-select-4-option-0"]').click();
//     await page.waitForTimeout(2000);
 
//     await browser.close();
// });
 
 
// test("Chapter 7 Handson 9",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/select-menu');
 
//     const stdDropdown = page.locator('#cars');
//     const stdIsMulti = await stdDropdown.evaluate((element)=>{
//         return element.hasAttribute('multiple');
//     })
 
//     console.log("Standard multi drop down status:", stdIsMulti);
   
//     await page.selectOption('#cars','Opel');
//     await page.waitForTimeout(1000);
//     await page.selectOption('#cars','Volvo');
//     await page.waitForTimeout(1000);
//     await page.selectOption('#cars','Audi');
//     await page.waitForTimeout(1000);
 
//     const mulSelDropdown = page.locator('#withOptGroup');
//     const mulIsMulti = await mulSelDropdown.evaluate((element) => {
//         return element.querySelectorAll('[aria-multiselectable="true"]').length > 0;
//     });
   
//     console.log('Multiselect Drop Down is multi-select:', mulIsMulti);
   
//     await page.locator('(//div[@class=" css-tlfecz-indicatorContainer"])[3]').click();
//     await page.keyboard.type('Red');
//     await page.keyboard.press('Enter');
//     await page.keyboard.type('Blue');
//     await page.keyboard.press('Enter');
//     await page.keyboard.type('Black');
//     await page.keyboard.press('Enter');
 
//     await page.waitForTimeout(2000);
//     await browser.close();
 
// });
 
// test("Chapter 7 Handson 10",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     const state = page.locator('//div[text()="Select State"]');
//     const city = page.locator('//div[text()="Select City"]');
 
//     console.log("State dropdown enable status:", await state.isEnabled());
//     console.log("City dropdown enable status:", await city.isEnabled());
 
//     await state.click();
//     await page.locator('div[id*="react-select-3-option-0"]').click();
//     await page.waitForTimeout(2000);
 
//     await city.click();
//     await page.locator('div[id*="react-select-4-option-0"]').click();
//     await page.waitForTimeout(2000);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 11",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     const state = page.locator('//div[text()="Select State"]');
//     const city = page.locator('//div[text()="Select City"]');
 
//     console.log("State dropdown enable status:", await state.isEnabled());
//     console.log("City dropdown enable status:", await city.isEnabled());
 
//     await state.click();
//     await page.locator('div[id*="react-select-3-option-0"]').click();
//     await page.waitForTimeout(2000);
 
//     await city.click();
//     await page.locator('div[id*="react-select-4-option-0"]').click();
//     await page.waitForTimeout(2000);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 12",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     const state = page.locator('//div[text()="Select State"]');
//     const city = page.locator('//div[text()="Select City"]');
 
//     console.log("State dropdown enable status:", await state.isEnabled());
//     console.log("City dropdown enable status:", await city.isEnabled());
 
//     await state.click();
//     await page.locator('div[id*="react-select-3-option-0"]').click();
//     await page.waitForTimeout(2000);
 
//     await city.click();
//     await page.locator('div[id*="react-select-4-option-0"]').click();
//     await page.waitForTimeout(2000);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 13",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     const state = page.locator('//div[text()="Select State"]');
 
//     await state.click();
//     await page.locator('div[id*="react-select-3-option-0"]').click();
//     await page.waitForTimeout(2000);
 
//     await page.reload();
//     await page.waitForTimeout(2000);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 14",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     await page.locator('#currentAddress').fill('XYZ Street');
//     await page.waitForTimeout(2000);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 15",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     await page.evaluate(() => {
//         alert('Alert Testing');
//     });
 
//     await page.waitForTimeout(2000);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 16",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     const webPgText = await page.evaluate(()=>document.body.innerText);
//     console.log(webPgText);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 17",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     const webPgText = await page.evaluate(()=>document.body.innerText);
//     console.log(webPgText);
 
//     console.log("\nTitle:",await page.title());
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 18",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     const scrollFixed = await page.evaluate(()=>{
//         return window.scrollTo(0,300);
//     })
 
//     await page.waitForTimeout(2000);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 19",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     const scrollDown = await page.evaluate(()=>{
//         return window.scrollTo(0,document.documentElement.scrollHeight);
//     })
 
//     await page.waitForTimeout(2000);
 
//     const scrollUp = await page.evaluate(()=>{
//         return window.scrollTo(0,0);
//     })
 
//     await page.waitForTimeout(2000);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 20",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     const takenEle = page.locator('#currentAddress');
//     await takenEle.scrollIntoViewIfNeeded();
   
//     await page.waitForTimeout(2000);
 
//     await browser.close();
// });
 
// test("Chapter 7 Handson 21",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('https://demoqa.com/automation-practice-form');
 
//     await page.locator('//button[text()="Submit"]').click();
//     await  page.waitForTimeout(2000);
//     await browser.close();
// });
 
// test("Chapter 7 Handson 22",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('C:/Users/2430147/OneDrive - Cognizant/Documents/Test/tests/circle.html');
 
//     await page.evaluate(() => {
//         const canvas = document.querySelector('canvas');
//         const ctx = canvas?.getContext?.('2d');
//         if (ctx) {
//             ctx.beginPath();
//             ctx.arc(50, 50, 25, 0, 2 * Math.PI);
//             ctx.stroke();
//         }
//     });
 
//     await page.waitForTimeout(2000);
//     await browser.close();
 
// });
 
// test("Chapter 7 Handson 23",async()=>{
//     const browser = await chromium.launch({headless:false});
//     const page = await browser.newPage();
 
//     await page.goto('C:/Users/2430147/OneDrive - Cognizant/Documents/Test/tests/circle.html');
 
//     await page.evaluate(() => {
//         const canvas = document.querySelector('canvas');
//         const ctx = canvas?.getContext?.('2d');
//         if (ctx) {
//            ctx.fillStyle = 'red';
//            ctx.fillRect(25, 25, 100, 100);
//         }
//     });
 
//     await page.waitForTimeout(2000);
//     await browser.close();
// });
 
test("Chapter 7 Handson 24",async()=>{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
 
    await page.goto('https://sketchtoy.com/');
   
    const canvas = page.locator('canvas').first();
    const box = await canvas.boundingBox();
   
    if (box) {
        await page.mouse.move(box.x + 50, box.y + 50);
        await page.mouse.down();
        await page.waitForTimeout(2000);
        await page.mouse.move(box.x + 200, box.y + 50);
        await page.mouse.up();
        await page.waitForTimeout(2000);
    }
 
    await page.waitForTimeout(2000);
    await browser.close();
});
 