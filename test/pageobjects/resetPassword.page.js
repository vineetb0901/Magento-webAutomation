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
}
module.exports = new resetPassWord()