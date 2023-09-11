const { expect } = require('chai')
const loginPage= require('../pageobjects/login.page')
const credentials = require('../../credentials')

describe('Login user', ()=>{
    beforeEach('Open the homepage Url', async()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
    })

    it('should login to the system', async()=>{
        await loginPage.doLogin()
        await browser.pause(2000)
        expect(await loginPage.loginConfirmation.getText()).to.equal('Welcome, vineet Bhat!','couldnt login')
    })

    it('login with wrong password',async()=>{
        await loginPage.loginButton.click()
        await loginPage.emailField.setValue(credentials.email)
        await loginPage.passWordField.setValue('hello@1234')
        await loginPage.submitButton.click()
        await browser.pause(1000)
        expect(await $('#maincontent > div.page.messages > div:nth-child(2) > div > div > div').getText()).to.equal('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.','cant find the error message')
    })
})