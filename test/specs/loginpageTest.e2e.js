const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");

describe("My Login application", () => {

   beforeEach(async()=>{
        await LoginPage.open();
     
   })
  afterEach(async()=>{
    await browser.closeWindow();
    await browser.reloadSession();
  })

  it(" login100: should login with valid credentials", async () => {
   
    await LoginPage.login("tejass@testvagrant.com", "KAlavathi9");
   
     expect(await LoginPage.welcomeMessage.getText()).toHaveTextContaining("Tejas");

   
  });

  it(" login101: should login with invalid credentials", async () => {
   

    await LoginPage.login("tejass@testvagrant.com", "KAlavathi");
    await LoginPage.waitForErrorMessage();
    await expect(await LoginPage.errorMessage.getText()).toContain(
      "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
    );

  });
});
