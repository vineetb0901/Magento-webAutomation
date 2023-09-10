const { expect } = require('chai')
const loginPage = require('../pageobjects/login.page') 
const productsPage = require('../pageobjects/products.page')

describe('Product search and View products',()=>{
    before('Open the site Url and proceed',async()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
    })
    
    it('Should search for product and display the list without login', async ()=>{
        const productName ='hoodie'
        await productsPage.searchInput.setValue(productName)
        await browser.keys('Enter')
        const searchResult = await productsPage.searchResult
        console.log(await searchResult.getText());
        expect(await searchResult.getText()).to.equal(`Search results for: '${productName}'`)
    })

    it('Should search for product and display the list with login',async ()=>{ 
        await loginPage.doLogin()
        const productName ='hoodie'
        await productsPage.searchInput.setValue(productName)
        await browser.keys('Enter')
        const searchResult = await productsPage.searchResult
        console.log(await searchResult.getText());
        expect(await searchResult.getText()).to.equal(`Search results for: '${productName}'`)

    })
})