import{test,expect, Locator} from '@playwright/test'


export class ProductPage{

 private page 
 addproduct : Locator
 yourcard   : Locator

 constructor(page){
    this.page = page
    
 }

    async AddProducttocart(_product1: string, _product2: string, _product3: string){
        for(let i=0 ;i<3; i++){
    const addtocardbutton = this.page.locator(".btn_primary")
    await addtocardbutton.nth(i).click()
        }  

    } 
      async navigatetocard(){
        const addtocardbutton =this.page.locator(".shopping_cart_container")
        addtocardbutton.click()
        
      }
 


}
    