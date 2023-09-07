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

  get signup()
  {
    return $("//a[@href=  'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/']");
  }
  get inputEmail() {
    return $("#email");
  }

  get inputPassword() {
    return $("#pass");
  }

  get btnSubmit() {
    return $("#send2");
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
  /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
  async login(email, password) {
    await this.signup.click();
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  async waitForWelcomeMessage() {
    await this.welcomeMessage.waitForEnabled();
    return await this.welcomeMessage.getText();
  }

  async waitForErrorMessage() {
    await this.errorMessage.waitForDisplayed();

    console.error(await this.errorMessage.getText());
  }

  /**
     * overwrite specific options to adapt it to page object
     */
  open() {
    return super.open();
  }

  async quit() {
    await browser.closeWindow();
  }
}

module.exports = new LoginPage();
