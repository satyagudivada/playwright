import {Page} from '@playwright/test'
export class loginPage{
    constructor(public page:Page){
        this.page=page;
    }
    async login(username:string,password:any){
        await this.page.locator('#user-name').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.click('#login-button');
    }
    
}