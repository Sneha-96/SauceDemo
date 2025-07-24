import {test , expect, Locator} from '@playwright/test'

export class Checkout{
    private page
    firstname : Locator
    lastname : Locator
    postalcode : Locator
    continuebtn : Locator
    finish : Locator
    

    constructor(page){
     this.page = page
     this.firstname = this.page.locator("#first-name")
     this.lastname  = this.page.locator("#last-name")
     this.postalcode = this.page.locator("#postal-code")
     this.continuebtn = this.page.locator(".btn_primary ")
     this.finish = this.page.locator ('a[href="./checkout-complete.html"]')
    
     
    }
    async CheckoutInformation(firstname,lastname,postalcode){
    await this.firstname.fill(firstname)
    await this.lastname.fill(lastname)
    await this.postalcode.fill(postalcode)
    await this.continuebtn.click()
    await this.finish.click()
   
    
    
}

}     