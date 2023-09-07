const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
     * define selectors using getter methods
     */

  get url() {
    return "https://magento.softwaretestingboard.com/";
  }

  get createAccount()
  {
    return $("//*[@href= 'https://magento.softwaretestingboard.com/customer/account/create/']")
  }

  get inputFirstName() {
    return $("#firstname");
  }
  get inputLastName() {
    return $("#lastname");
  }


  get inputEmail() {
    return $("#email_address");
  }

  get inputPassword() {
    return $("#password");
  }


  get inputConfirmPassword() {
    return $("#password-confirmation");
  }

  get btnSubmit() {
    return $("//button[@class= 'action submit primary']");
  }
 
  get message()
  {
    return $("//*[@class= 'not-logged-in']");
  }

  get welcomeMessage() {
    return $("//*[@class= 'not-logged-in']");
  }

  get errorMessage()
  {
    return $("//*[@class= 'messages' and @role= 'alert']");
  }

 
  async register(firstname,lastname,email, password,confirmpassword) {
    await this.createAccount.click();
    await this.inputFirstName.setValue(firstname);

    await this.inputLastName.setValue(lastname);

    await this.inputEmail.setValue(email);
 
    await this.inputPassword.setValue(password);
   
    await this.inputConfirmPassword.setValue(confirmpassword);
    
    await this.btnSubmit.click();
  }

 

  

  /**
     * overwrite specific options to adapt it to page object
     */
  open() {
    return super.open();
  }


}

module.exports = new LoginPage();
