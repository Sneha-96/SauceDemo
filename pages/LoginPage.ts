import {test , expect, Locator, Page} from '@playwright/test'


export class LoginPage{
    private page : Page
    private username : Locator
    private password : Locator
    private loginbtn : Locator


    constructor(page){
         this.page=page
         this.username = this.page.locator("#user-name")
         this.password = this.page.locator("#password")
         this.loginbtn = this.page.locator("#login-button")
        
    }
         async launchURL(url){
         await this.page.goto(url)
     }
    
    async validLogin(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()

}

    async invalidLogin(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()
    }
}