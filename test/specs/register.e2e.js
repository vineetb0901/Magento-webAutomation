const { expect } = require('chai')
const registerPage = require('../pageobjects/register.page')
const credentials = require('../../credentials')
const testData = require('../../testData')

// describe('Test for existence of register page', ()=>{
//     it('Should test if the user is able to go to register page',async()=>{
//         await browser.url('https://magento.softwaretestingboard.com/')
//         const createAccount = await registerPage.createAccountButton
//         await createAccount.click()
//         expect(await registerPage.getPageTitle).to.equal('Create New Customer Account')
//     })
// })

describe('Test User Registration', ()=>{
    beforeEach('Enter the create account page', async()=>{
        await browser.url('https://magento.softwaretestingboard.com/customer/account/create/')
    })

    it('should test the register user with empty Fields',async()=>{
        await registerPage.confirmButton.scrollIntoView()
        const createAccountButton = await registerPage.confirmButton
        await createAccountButton.click()
    })
    
    it('Should show the error message of user exist',async()=>{
        const firstName = await registerPage.firstName
        const lastName = await registerPage.lastName
        const emailAddress = await registerPage.emailAddress
        const passWord = await registerPage.passWord
        const passWordConfirmation = await registerPage.passWordConfirmation
        
        await firstName.setValue(credentials.firstName)
        await lastName.setValue(credentials.lastName)
        await emailAddress.setValue(credentials.email)
        await passWord.setValue(credentials.password)
        await passWordConfirmation.setValue(credentials.password)
        
        await registerPage.confirmButton.click()
        const userExistError = await registerPage.userExist
        await browser.pause(1000)
        
        expect(await userExistError.getText()).to.equal('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
        
    })
    
    it('Should redirect to forgot password', async()=>{
        const firstName = await registerPage.firstName
        const lastName = await registerPage.lastName
        const emailAddress = await registerPage.emailAddress
        const passWord = await registerPage.passWord
        const passWordConfirmation = await registerPage.passWordConfirmation
        
        await firstName.setValue(credentials.firstName)
        await lastName.setValue(credentials.lastName)
        await emailAddress.setValue(credentials.email)
        await passWord.setValue(credentials.password)
        await passWordConfirmation.setValue(credentials.password)
        
        await registerPage.confirmButton.click()
        const userExistError = await registerPage.userExist
        await browser.pause(1000)
        const clickHereLink = await userExistError.$('a')
        await clickHereLink.click()
        expect(await registerPage.getPageTitle).to.equal('Forgot Your Password?')
        
    })
    
    it('Should be able to register user with details', async()=>{     
        const firstName = await registerPage.firstName
        const lastName = await registerPage.lastName
        const emailAddress = await registerPage.emailAddress
        const passWord = await registerPage.passWord
        const passWordConfirmation = await registerPage.passWordConfirmation

        await firstName.setValue(testData.firstName)
        await lastName.setValue(testData.lastName)
        await emailAddress.setValue(testData.email)
        await passWord.setValue(testData.password)
        await passWordConfirmation.setValue(testData.password)

        await registerPage.confirmButton.click()
        expect(await registerPage.getPageTitle).to.equal('My Account')
        await browser.pause(10000)
    })

})

