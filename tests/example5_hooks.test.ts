// import {test,chromium} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/index.html')
    await page.fill('#user-name','standard_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');
})
test.afterEach(async({page})=>{
    await page.getByText('Open Menu').click()
    await page.click('#logout_sidebar_link');
}) 
//login
// test('login hooks',async({page})=>{
//     await page.fill('#user-name','standard_user');
//     await page.fill('#password','secret_sauce');
//     await page.click('#login-button');
    
// })
//home page

test('homepage',async({page})=>{
    await page.locator(".inventory_item_name");
    await page.waitForTimeout(3000);

})
//add to cart
test('homepage1',async({page})=>{
    await page.click('(//button[@class="btn_primary btn_inventory"])[1]');
    
    await page.waitForTimeout(2000);

})


//logut
// test("logut",async({page})=>{
//     await page.getByText('Open Menu').click()
//     await page.click('#logout_sidebar_link');
// })






//before ALl and after All
let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage(); // assign to outer scope
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
});

test.afterAll(async () => {
  await page.locator('//button[text()="Open Menu"]').click();
  await page.click('#logout_sidebar_link');
  await page.close(); // optional cleanup
});

// home page
test('homepage11', async () => {
  await page.locator('.inventory_item_name');
  await page.waitForTimeout(3000);
});

// add to cart
test('homepage12', async () => {
  await page.click('(//button[@class="btn_primary btn_inventory"])[1]');
  await page.waitForTimeout(2000);
});
