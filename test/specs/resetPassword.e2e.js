const { expect } = require('chai')
const resetPage = require('../pageobjects/resetPassword.page')
const credentials = require('../../credentials')
const loginPage = require('../pageobjects/login.page')
const testData = require('../../testData')
describe('Reset password', ()=>{
    it.skip('Reset the password',async()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
        await resetPage.signInButton.click()
        await resetPage.forgotButton.click()
        await resetPage.emailInputField.setValue(credentials.email)
        await resetPage.resetButton.click()
        await browser.pause(1000)
        const resetMessage = await resetPage.resetConfirmationMsg
        expect(await resetMessage.getText()).to.equal(`If there is an account associated with ${credentials.email} you will receive an email with a link to reset your password.`)
    })
})
describe('Modify the password', ()=>{
    it('Should modify the password', async()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
        await loginPage.doLogin()
        await browser.url('https://magento.softwaretestingboard.com/customer/account/')     
        await resetPage.editPassword(testData.newPassword)
        await browser.pause(2000)
    })
})