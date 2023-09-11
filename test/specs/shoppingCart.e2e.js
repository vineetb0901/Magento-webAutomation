const shoppingCartPage = require("../pageobjects/shoppingCart.page")
const loginPage = require('../pageobjects/login.page')
const productsPage = require('../pageobjects/products.page')
const testData = require("../../testData")
const { expect } = require("chai")

describe('Shopping Cart', ()=>{
    before('Do login and proceed',async()=>{
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
        await shoppingCartPage.demoProduct.scrollIntoView()
        await shoppingCartPage.selectSize.click()
        await shoppingCartPage.selectColor.click()
        await shoppingCartPage.addToCartButton.click()
        await browser.pause(2000)
        await shoppingCartPage.shoppingCartIcon.scrollIntoView()
        await shoppingCartPage.shoppingCartIcon.click()
        expect(await $('//a[contains(text(),"Chaz Kangeroo Hoodie")]').getText()).to.equal(await shoppingCartPage.demoProduct.getText())
    })


    it('Should be able to view and edit quantity of the cart', async()=>{
        await shoppingCartPage.viewAndDeleteCart.click()
        await shoppingCartPage.updateQuantityField(3)
        await browser.pause(6000)
        await shoppingCartPage.shoppingCartIcon.click()
        expect(await shoppingCartPage.cartCount.getText()).to.equal('3')
    })

    it('Should be able to proceed to checkout page', async()=>{
        await browser.pause(3000)
        await shoppingCartPage.proceedToCheckout.click()
        expect(await browser.getTitle()).to.equal('Checkout','title doesnt match')
    })
    it('Should be able to fill ship details and place order',async()=>{
        await browser.pause(1000)
        await shoppingCartPage.nextButton.click()
        await shoppingCartPage.placeOrderButton.waitForDisplayed()
        await shoppingCartPage.placeOrderButton.click()
        await shoppingCartPage.orderConfirmation.waitForDisplayed()
        const confirmMessage = await shoppingCartPage.orderConfirmation
        await browser.pause(3000)
        expect(await confirmMessage.getText()).to.equal('Thank you for your purchase!')
    })

})