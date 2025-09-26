import {test} from '@playwright/test'
test('mouse hover',async({page})=>{
    await page.goto('https://www.nike.com/in/');
    const hov=await page.locator('(//a[@class="menu-hover-trigger-link"])[1]');
    await hov.hover();
})