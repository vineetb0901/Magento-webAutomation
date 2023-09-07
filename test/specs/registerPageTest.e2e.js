const { expect } = require("@wdio/globals");
const ResPage = require("../pageobjects/register.page");

describe("My Login application", () => {

   beforeEach(async()=>{
        await ResPage.open();
     
   })
  afterEach(async()=>{
    await browser.closeWindow();
    await browser.reloadSession();
  })

  it.skip(" register100: should login with valid credentials", async () => {
   
    await ResPage.register("varun","A", "varuna@testvagrant.com", "Varun@123","Varun@123");
   
    await $(ResPage.message).waitForEnabled();
    await expect(await ResPage.message).toHaveTextContaining("varun");

   
  });

  it(" register100: should login with invalid credentials", async () => {
   
    await ResPage.register("varun","A", "varuna@testvagrant.com", "Varun@123","Varun@123");
   
    

    await ResPage.errorMessage.waitForDisplayed();
    console.log(await ResPage.errorMessage.getText());
  expect(await ResPage.errorMessage.getText()).toHaveText("There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.")
  

   
  });


 
});
