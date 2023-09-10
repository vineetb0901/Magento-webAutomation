class registerPage {
    get getPageTitle(){
        return browser.getTitle()
    }
    get createAccountButton(){
        return $('//a[contains(text(),"Create an Account")]')
    }
    get firstName(){
        return $('#firstname')
    }
    get lastName(){
        return $('#lastname')
    }
    get emailAddress(){
        return $('#email_address')
    }
    get passWord(){
        return $('#password')
    }
    get passWordConfirmation(){
        return $('#password-confirmation')
    }
    get confirmButton(){
        return $('//button[@title="Create an Account"]')
    }
    // get defaultMsg(){
    //     browser.pause(3000)
    //     return $('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span')
    // }
    get requireField(){
        return $('.mage-error')
    }
    get userExist(){
        return $('/html/body/div[2]/main/div[2]/div[2]/div/div/div')
        // return $('#maincontent > div.page.messages > div:nth-child(2) > div > div > div')
        
    }

}
module.exports = new registerPage()