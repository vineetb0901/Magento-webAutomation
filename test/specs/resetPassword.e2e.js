const { expect } = require('chai')
const resetPage = require('../pageobjects/resetPassword.page')
const credentials = require('../../credentials')
const loginPage = require('../pageobjects/login.page')
const testData = require('../../testData')


describe('Reset password', ()=>{
    beforeEach('open the website url', async()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
    })
    it('Reset the password',async()=>{
        await resetPage.signInButton.click()
        await resetPage.forgotButton.click()
        await resetPage.emailInputField.setValue(credentials.email)
        await resetPage.resetButton.click()
        await browser.pause(2000)
        expect(await resetPage.resetConfirmationMsg.getText()).to.equal(`If there is an account associated with ${credentials.email} you will receive an email with a link to reset your password.`)
    })


    it('Should modify the password', async()=>{
        await loginPage.doLogin()
        // await browser.url('https://magento.softwaretestingboard.com/customer/account/')     
        await resetPage.dropDownButton.click()
        await resetPage.myAccountButton.click()
        await browser.pause(1000)
        await resetPage.editPassword(testData.newPassword)
        await browser.pause(2000)
        await loginPage.emailField.setValue(credentials.email)
        await loginPage.passWordField.setValue(testData.newPassword)
        await loginPage.submitButton.click()
        await browser.pause(2000)
        expect(await loginPage.loginConfirmation.getText()).to.equal('Welcome, vineet Bhat!')
        await browser.pause(2000)
    })
})
