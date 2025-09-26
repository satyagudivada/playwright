import {test} from '@playwright/test'
test('Upload file',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('input[id="singleFileInput"]').click();
    await page.locator('input[id="singleFileInput"]').setInputFiles('C:/Users/2430330/Downloads/Filled_Functional_Testing_Template.xlsx')
    await page.waitForTimeout(3000);
})