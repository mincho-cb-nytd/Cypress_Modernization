import HomePageObjects from "../pages/HomePageObjects";
const homePage = new HomePageObjects();
import CommonPageObjects from "../pages/CommonPageObjects";
const commonPage = new CommonPageObjects();
describe("Login Page Validations", function () {
 
  it("Verify user is able to select state user tab", function () {
    cy.visit("");
    homePage.clickOnStateButton();
    homePage.elements.loginInstructionsMsg().contains('Please enter your Username and Password and select Login to begin using the NYTD portal')
    homePage.elements.usernameText().contains('Username')
    homePage.elements.forgotUsernameText().contains('Forgot Username')
    homePage.elements.passwordText().contains('Password')
    homePage.elements.forgotPasswordText().contains('Forgot Password')
    homePage.elements.LoginBtn().contains('Login')
  });

  it("Verify user is able to enter text for username and password", function () {
    cy.visit("");
    homePage.clickOnStateButton();
    homePage.verifyUsernameAndPasswordInputContainsSpecificValue();
  });

  it("Verify forgot username navigates to forgot username page", function () {
    cy.visit("");
    homePage.clickOnForgotUsername();
    commonPage.verifyUrl("/ForgotUserName");
  });

  it("Verify forgot password navigates to forgot password page", function () {
    cy.visit("");
    homePage.clickOnForgotPassword();
    commonPage.verifyUrl("/ForgotPassword");
  });

  it("Verify Signing in with incorrect username will display error validation message Incorrect username or password. Please try again", function () {
    cy.visit("");
    homePage.enterIncorrectUsernameAndPassword();
    homePage.clickOnLoginBtn();
    homePage.elements.incorrectUsernameAndPasswordErrorMsg().contains('Incorrect username or password. Please try again.')

  });
});