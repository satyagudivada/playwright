import {test,chromium} from '@playwright/test'
import {loginPage} from './login.ts';
test('login',async({page})=>{
   const login1=new loginPage(page)
   await page.goto('https://www.saucedemo.com/v1/');
   await login1.login('standard_user','secret_sauce')
   

})