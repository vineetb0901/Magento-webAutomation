const { expect, assert } = require('chai')
const homepage= require('../pageobjects/home.page')
const registerPage = require('../pageobjects/register.page')
describe('Home page existance',()=>{
    beforeEach('Open the homepage', async ()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
    })
    it('verify for homepage title', async ()=>{
     
        const title= await homepage.getPageTitle()
        expect(title).to.equal('Home Page')
    })
    it('Should test if the user is able to go to register page',async()=>{
        const createAccount = await registerPage.createAccountButton
        await createAccount.click()
        expect(await registerPage.getPageTitle).to.equal('Create New Customer Account','title doesnt match')
    })
   
})
