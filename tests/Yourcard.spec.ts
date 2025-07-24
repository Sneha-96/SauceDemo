import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { ProductPage } from '../pages/ProductPage'
import { Yourcard } from '../pages/YourCard'

const url = "https://www.saucedemo.com/v1/index.html"
const username = "standard_user"
const username1 ="locked_out_user"
const password = "secret_sauce"
const product1 = "Sauce Labs Backpack"
const product2 = "Sauce Labs Bolt T-Shirt" 
const product3 = "Sauce Labs Onesie"

test("Removeandcheckout" , async({page})=>{
    const loginpage = new LoginPage(page)
         const productpage = new ProductPage(page)
         const yourcardpage = new Yourcard(page)
         await loginpage.launchURL(url)
         await loginpage.validLogin(username,password)
         await page.waitForTimeout(2000);
         await productpage.AddProducttocart(product1 , product2 , product3)
         await page.waitForTimeout(5000);
         await productpage.navigatetocard()
         await page.waitForTimeout(5000);
         await yourcardpage.RemoveandCheckout()
         await page.waitForTimeout(5000);


})