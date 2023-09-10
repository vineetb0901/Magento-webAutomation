const credentials = require("../../credentials")

class resetPassWord {
    get dropDownButton(){
        return $('//button[@class="action switch"]')
    }
    get myAccountButton(){
        return $('//a[contains(text(),"My Account")]')
    }
    get signOutButton(){

        return $('//a[contains(text(),"Sign Out")]')
    }
    get signOutConfirmation(){
        return $('#maincontent > div.page-title-wrapper > h1 > span')
    }
    get signInButton(){
        return $('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a')
    }
    get forgotButton(){
        return $('#login-form > fieldset > div.actions-toolbar > div.secondary > a > span')
    }
    get emailInputField(){
        return $('#email_address')
    }
    get resetButton(){
        return $('#form-validate > div > div.primary > button')
    }
    get resetConfirmationMsg(){
        return $('#maincontent > div.page.messages > div:nth-child(2) > div > div > div')
    }
    get editPasswordButton(){
        return $('#maincontent > div.columns > div.column.main > div.block.block-dashboard-info > div.block-content > div > div.box-actions > a.action.change-password')
    }
    get currentPassword(){
        return $('#current-password')
    }
    get newPasswordField(){
        return $('#password')
    }
    get passwordConfirmation(){
        return $('#password-confirmation')
    }

    async editPassword(newPassword){
        await this.editPasswordButton.click()
        await browser.pause(2000)
        await this.currentPassword.setValue(credentials.password)
        await this.newPasswordField.setValue(newPassword)
        await this.passwordConfirmation.setValue(newPassword)
        await $('//button[@class="action save primary"]').click()
    }
    async signOut(){
        await this.dropDownButton.click()
        await this.signOutButton.click()
        return await browser.url('https://magento.softwaretestingboard.com/')
    }
}
module.exports = new resetPassWord()