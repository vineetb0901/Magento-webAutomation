const credentials = require("../../credentials")

class resetPassWord {
    get dropDownButton(){
        return $('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome > span > button')
    }
    get signOutButton(){
        return $('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.customer-welcome.active > div > ul > li.authorization-link')
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
        return $('//a[contains(text(),"Change Password")]')
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
}
module.exports = new resetPassWord()