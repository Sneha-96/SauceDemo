import{test , expect, Locator} from '@playwright/test'

export class Yourcard{

    private page
    removebtn : Locator
    checkout  : Locator

    constructor(page){
    this.page = page
    this.removebtn = this.page.locator(".btn_secondary").first()
    this.checkout = this.page.locator ('a[href="./checkout-step-one.html"]')
 }

    async RemoveandCheckout() {
    await this.removebtn.click();
    await this.checkout.click();
    }
    
}

