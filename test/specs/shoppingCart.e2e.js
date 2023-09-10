const shoppingCartPage = require("../pageobjects/shoppingCart.page")
const loginPage = require('../pageobjects/login.page')
const productsPage = require('../pageobjects/products.page')
const testData = require("../../testData")
const { expect } = require("chai")

describe('shopping Cart', ()=>{
    before('Do login and proceed',async()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
        await loginPage.doLogin()
    })
    it('Should show the coorect searchResults for given query',async()=>{
        const productName =testData.testProductSample
        await productsPage.searchInput.setValue(productName)
        await browser.keys('Enter')
        const searchResult = await productsPage.searchResult
        expect(await searchResult.getText()).to.equal(`Search results for: '${productName}'`)
    })

    it('Should add products to cart', async()=>{
        const productName =testData.testProductSample
        await productsPage.searchInput.setValue(productName)
        await browser.keys('Enter') 
        await shoppingCartPage.demoProduct.scrollIntoView()
        await shoppingCartPage.selectSize.click()
        await shoppingCartPage.selectColor.click()
        await shoppingCartPage.addToCartButton.click()
        await shoppingCartPage.shoppingCartIcon.click()
        await browser.pause(6000)
    })

    it('Should check for the correct quantity', async()=>{
        await browser.pause(1000)
        console.log(await shoppingCartPage.cartCount.getText())
    })

    it.only('Should be able to view and delete the cart', async()=>{
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
})