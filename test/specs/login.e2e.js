const loginPage= require('../pageobjects/login.page')
describe('Login user', ()=>{
    it('should login to the system', async()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
        await loginPage.doLogin()
    })
})