import{test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

const url = "https://www.saucedemo.com/v1/index.html"
const username = "standard_user"
const username1 ="locked_out_user"
const password = "secret_sauce"

test("1.Valid succefull login" , async({page})=>{
 const loginpage = new LoginPage(page)
 await loginpage.launchURL(url)
 await loginpage.validLogin(username,password)
 await page.waitForTimeout(2000);

})

test("2.Locked Out User Login Error ,", async({page})=>{
 const loginpage = new LoginPage(page)
 await loginpage.launchURL(url)
 await loginpage.validLogin(username1,password)
 await page.waitForTimeout(2000);
})
test("3.Sort item from lowest to Highest", async({page})=>{
 const loginpage = new LoginPage(page)
 await loginpage.launchURL(url)
 await loginpage.validLogin(username,password)
 await page.waitForTimeout(2000);
 await page.locator(".product_sort_container").selectOption({value :'lohi'})
 await page.waitForTimeout(2000);
})