import {test,expect} from '@playwright/test'
/*test('title',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    const pageTitle=await page.title();
    console.log('pageTitle is',pageTitle);
    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle('STORE');//verifying title

    const pageURL=page.url();
    console.log('page URL is',pageURL);
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
})
// locating elements

test('locating',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.click('id=login2');
    await page.fill('#loginusername','pavanol');
    await page.type('//input[@id="loginpassword"]','test@123');
    await page.click('(//button[@class="btn btn-primary"])[3]');

    const logut=page.locator('//a[@id="logout2"]');
    //visibitity 
    await expect(logut).toBeVisible();

})*/

// all the link text in webpage

/*test('all links',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html') ;
    const links=await page.locator('a')
    const size=await links.count();
    for(let i=0;i<=size; i++){
        const linkText= await links.nth(i).textContent()
        console.log(linkText)
    }
    //we want all avaliable product names in webpage

    // await page.waitForSelector('.hrefch')
    //  const products= await page.locator('.hrefch').all()
    // for(const product of products){
    //     const productName=await product.textContent();
    //     console.log('productNames is',productName)
    // }
})*/

// test('all links',async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') ;
//     await page.waitForTimeout(2000);
//     //getBYAltText
//     await expect(page.getByAltText('company-branding')).toBeVisible();
//    //or
//    const log=page.getByAltText('company-branding')
//    await expect(log).toBeVisible();
//    //getByPlaceholder
//    await page.getByPlaceholder('Username').fill('Admin');
//    await page.getByPlaceholder('Password').fill('admin123');
//    //getByRole
//    await page.getByRole('button',{type:"submit"}).click();
//   //getByText
//   const claim = page.getByText('Claim', { exact: true });
//   await expect(claim).toBeVisible();
//   await claim.click();
//   //getByLabel
//   await page.getByLabel('data-v-30ff22b1 data-v-957b4417');
//   await page.waitForTimeout(2000);
//   //getbytitle
//   const title= page.getByTitle('OrangeHRM');
//   console.log('title is',title);
// //   await expect(title).toBeVisible();
//   await page.waitForTimeout(2000);
    
// })
    
test('hidden dropdown',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin')//username
    // await page.waitForTimeout(2000);
    await page.locator('input[name="password"]').fill('admin123');//password
    // await page.waitForTimeout(2000);
    await page.click('button[type="submit"]');//login 
    await page.waitForTimeout(1000);
    await page.click('(//a[@class="oxd-main-menu-item"])[2]');

})