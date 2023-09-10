const shoppingCartPage = require("../pageobjects/shoppingCart.page")
const loginPage = require('../pageobjects/login.page')
const productsPage = require('../pageobjects/products.page')
const testData = require("../../testData")
const { expect } = require("chai")
const resetPasswordPage = require("../pageobjects/resetPassword.page")

describe('shopping Cart', ()=>{
    beforeEach('Do login and proceed',async()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
        await loginPage.doLogin()
    })

    it('Should show the correct search Results for given query',async()=>{
        const productName =testData.testProductSample
        await productsPage.searchInput.setValue(productName)
        await browser.keys('Enter')
        await shoppingCartPage.demoProduct.scrollIntoView()
        expect(await productsPage.searchResult.getText()).to.equal(`Search results for: '${productName}'`)
    })

    it('Should add products to cart', async()=>{
        await productsPage.searchInput.setValue(testData.testProductSample)
        await browser.keys('Enter') 
        await shoppingCartPage.demoProduct.scrollIntoView()
        await shoppingCartPage.selectSize.click()
        await shoppingCartPage.selectColor.click()
        await shoppingCartPage.addToCartButton.click()
        await shoppingCartPage.shoppingCartIcon.click()
        expect(await $('//a[contains(text(),"Chaz Kangeroo Hoodie")]').getText()).to.equal(await shoppingCartPage.demoProduct.getText())
    })


    it('Should be able to view and edit quantity of the cart', async()=>{
        await browser.pause(2000)
        await shoppingCartPage.shoppingCartIcon.click()
        await shoppingCartPage.viewAndDeleteCart.click()
        await shoppingCartPage.updateQuantityField(3)
        await browser.pause(5000)
        expect(await shoppingCartPage.cartCount.getText()).to.equal('3')
        
    })

    it('Should be able to proceed to checkout page', async()=>{
        await browser.pause(2000)
        await shoppingCartPage.shoppingCartIcon.click()
        await shoppingCartPage.proceedToCheckout.click()
        expect(await browser.getTitle()).to.equal('Checkout')
        
    })
    afterEach('do signout after each test',async()=>{
        await $('//button[@class="action switch"]').click()
        await resetPasswordPage.signOutButton.click()
    })
})