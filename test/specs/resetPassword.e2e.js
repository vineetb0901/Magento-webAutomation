const { expect } = require('chai')
const resetPage = require('../pageobjects/resetPassword.page')
const credentials = require('../../credentials')
describe('Reset password', ()=>{
    it.only('Reset the password',async()=>{
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