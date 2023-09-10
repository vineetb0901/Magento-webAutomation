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
        return $('body > div.page-wrapper > header > div.header.content > div.minicart-wrapper')
    }
    get cartCount(){
        return $('.counter-number')
        
    }
    get viewAndDeleteCart(){
        return $('//a[@class="action viewcart"]')
    }
    async updateQuantityField(quantity){
        await $('//input[@class="input-text qty"]').setValue(quantity)
        await browser.keys('Enter')
    }
    get proceedToCheckout(){
        return $('//button[@class="action primary checkout"]')
    }

}
module.exports = new shoppingCart()