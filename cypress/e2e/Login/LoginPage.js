import { log } from "async";
import LoginPageObjects from "../pages/LoginPageObject";
const loginPage = new LoginPageObjects();
describe("Login Page Validations", function () {
      before(() => {
    Cypress.session.clearAllSavedSessions()
  })
   beforeEach(function () {
    cy.session("login", () => {
      cy.visit("");
    })
  });
  it("Verify NYTD logo navigates to acf page", function () {
    cy.visit("");
    loginPage.clickOnNYTDIcon();
  });

    it("Verify user is able to select state user tab", function () {
    cy.visit("");
    loginPage.clickOnStateButton();
    loginPage.elements.loginInstructionsMsg().contains('Please enter your Username and Password and select Login to begin using the NYTD portal')
    loginPage.elements.usernameText().contains('Username')
    loginPage.elements.forgotUsernameText().contains('Forgot Username')
    loginPage.elements.passwordText().contains('Password')
    loginPage.elements.forgotPasswordText().contains('Forgot Password')
    loginPage.elements.LoginBtn().contains('Login')
  });

    it("Verify user is able to enter text for username and password", function () {
    cy.visit("");
    loginPage.clickOnStateButton();
    loginPage.verifyUsernameAndPasswordInputContainsSpecificValue();
  });

   it("Verify user is able to enter text for username and password", function () {
    cy.visit("");
    loginPage.clickOnStateButton();
    loginPage.verifyUsernameAndPasswordInputContainsSpecificValue();
  });

   it("Verify forgot username navigates to forgot username page", function () {
    cy.visit("");
    
  });
});