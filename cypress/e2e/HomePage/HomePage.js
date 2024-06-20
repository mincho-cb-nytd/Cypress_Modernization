import HomePageObjects from "../pages/HomePageObjects";
const homePage = new HomePageObjects();
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
    homePage.clickOnNYTDIcon();
  });

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

   it("Verify user is able to enter text for username and password", function () {
    cy.visit("");
    homePage.clickOnStateButton();
    homePage.verifyUsernameAndPasswordInputContainsSpecificValue();
  });

   it("Verify forgot username navigates to forgot username page", function () {
    cy.visit("");
    
  });
});