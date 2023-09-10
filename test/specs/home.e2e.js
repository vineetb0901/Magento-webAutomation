const { expect, assert } = require('chai')
const homepage= require('../pageobjects/home.page')
describe('Home page existance',()=>{
    beforeEach('Open the homepage', async ()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
    })
    it('verify for homepage title', async ()=>{
     
        const title= await homepage.getPageTitle()
        expect(title).to.equal('Home Page')
    })
})