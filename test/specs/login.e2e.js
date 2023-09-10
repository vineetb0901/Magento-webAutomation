const loginPage= require('../pageobjects/login.page')
describe('Login user', ()=>{
    it('should login to the system', async()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
        await loginPage.loginButton.click()
        await loginPage.emailField.setValue('lobirytu@tutuapp.bid')
        await loginPage.passWordField.setValue('vineet@1234')
        await loginPage.submitButton.click()
        await browser.pause(3000)
    })
})