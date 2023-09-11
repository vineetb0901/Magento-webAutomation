class shoppingCart {
    get demoProduct(){
        return $('//a[contains(text(),"Chaz Kangeroo Hoodie")]')
    }
    get selectSize(){
        return $('/html/body/div[2]/main/div[3]/div[1]/div[2]/div[2]/ol/li[10]/div/div/div[2]/div[1]/div/div[2]')

    }
    get selectColor(){
        return $('/html/body/div[2]/main/div[3]/div[1]/div[2]/div[2]/ol/li[10]/div/div/div[2]/div[2]/div/div[1]')
    }
    get addToCartButton(){
        return $('/html/body/div[2]/main/div[3]/div[1]/div[2]/div[2]/ol/li[10]/div/div/div[3]/div/div[1]/form/button')
    }
    get shoppingCartIcon(){
        return $('//a[@class="action showcart"]')
    }
    get cartCount(){
        return $('.counter-number')
        
    }
    get viewAndDeleteCart(){
        return $('//a[@class="action viewcart"]')
    }
    get quantityField(){
        return $('//input[@class="input-text qty"]')
    }
    async updateQuantityField(quantity){
        await this.quantityField.setValue(quantity)
        return await browser.keys('Enter')
    }
    get proceedToCheckout(){
        // return $('#maincontent > div.columns > div > div.cart-container > div.cart-summary > ul > li:nth-child(1) > button')
        return $('//button[@data-role="proceed-to-checkout"]')
    }

}
module.exports = new shoppingCart()