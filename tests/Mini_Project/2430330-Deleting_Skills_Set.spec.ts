import {test,chromium,firefox,webkit} from '@playwright/test'
test('Deleting_Skill_Set',async({page})=>{
    //const browser=await chromium.launch({headless:false});
    //const page=await browser.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin')//username
    // await page.waitForTimeout(2000);
    await page.locator('input[name="password"]').fill('admin123');//password
    // await page.waitForTimeout(2000);
    await page.click('button[type="submit"]');//login 
    await page.waitForTimeout(1000);
    await page.click('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]');//go to admin
    await page.waitForTimeout(1000);
    await page.getByText('Job', { exact: true }).click();//go to job
    await page.getByText('Job Categories').click();//select job Categories
    await page.click('button[class="oxd-button oxd-button--medium oxd-button--secondary"]');//click on add 
    //await page.locator('div[class="oxd-input-group oxd-input-field-bottom-space"] input[class="oxd-input oxd-input--active"]').fill('Test Enginner');// test engineer
    //or
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill('Test Enginner');// write the name as Test Enginner
    await page.click('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]');//save
    await page.click('(//div[text()="Test Enginner"]/../..//button[@class="oxd-icon-button oxd-table-cell-action-space"])[1]')//click on delete 
    await page.waitForTimeout(1000);
    await page.getByText(' Yes, Delete ').click();//yes delete
    await page.waitForTimeout(2000);
    //organization
    await page.getByText('Organization').click();//Go to organization
    //await page.waitForTimeout(1000);
    await page.getByText('Locations').click();//select the Location
    await page.click('button[class="oxd-button oxd-button--medium oxd-button--secondary"]');//go to add
    await page.waitForTimeout(1000);
    await page.fill('(//input[@class="oxd-input oxd-input--active"])[2]','Chennai');//write name of location is Chennai
    await page.waitForTimeout(1000);
    await page.click('div[class="oxd-select-text-input"]');//select country dropdown
    await page.waitForTimeout(1000);
    await page.getByText('India', { exact: true }).click(); //adding country
    await page.waitForTimeout(1000);
    await page.click('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]'); //save
    await page.click('(//div[text()="Chennai"]/../..//button[@class="oxd-icon-button oxd-table-cell-action-space"])[1]');// click on delete button
    await page.waitForTimeout(1000);
    await page.getByText(' Yes, Delete ').click() //deleted location
    await page.waitForTimeout(2000);
    //Qualification
    await page.getByText('Qualifications').click();// go to qualifications
    await page.getByText('Skills').click(); //select the skills
    await page.click('button[class="oxd-button oxd-button--medium oxd-button--secondary"]');//click on add 
    await page.fill('(//input[@class="oxd-input oxd-input--active"])[2]','Testing Demo');// write the name as Testing Demo
    await page.getByText(' Save ').click();//click on save button
    await page.click('(//div[text()="Testing Demo"]/../..//button[@class="oxd-icon-button oxd-table-cell-action-space"])[1]') //click on delete button
    await page.waitForTimeout(2000);
    await page.getByText(' Yes, Delete ').click(); //click on yes delete
    if(!(await page.locator('//div[@class="orangehrm-paper-container"]//div[text()="Testing Demo"]').isVisible())){
        console.log('Sucessfully Deleted the skill “Testing Demo”')
    }
    else{
        console.log('The skill “Testing Demo” is not Deleted')
    }
    await page.waitForTimeout(2000)
    await page.click('[class="oxd-userdropdown-tab"]');//click on profile
    await page.getByText('Logout').click(); // click logout
    await page.waitForTimeout(2000);
    await page.close(); //close the page
   
   
});