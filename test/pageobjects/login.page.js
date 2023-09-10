const credentials = require('../../credentials')
class loginPage {
    get loginButton(){
        return $('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a')
    }
    get emailField(){
        return $('#email')
    }
    get passWordField(){
        return $('#pass')
    }
    get submitButton(){
        return $('#send2')
    }
    get loginConfirmation(){
        return $('.logged-in')
    }
    async doLogin(){
        await this.loginButton.click()
        await this.emailField.setValue(credentials.email)
        await this.passWordField.setValue(credentials.password)
        await this.submitButton.click()
    }

}
module.exports = new loginPage()