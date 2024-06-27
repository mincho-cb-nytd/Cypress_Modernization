class HomePageObjects {
    elements = {
        nytdIcon: () => cy.get('[data-testid="NYTD_logo_left"]'),
        phoneNumber: () => cy.get('[data-testid="phone_number_link"]'),
        email: () => cy.get('[data-testid="email_link"]'),
        stateUserBtn: () => cy.get('[data-testid="state_user_button"]'),
        loginInstructionsMsg: () => cy.get('[data-testid="state_instructions"]'),
        usernameText: () => cy.get('.styles_formGroup1___KxLX > [data-testid="label"]'),
        usernameInput: () => cy.get('[data-testid="user_id_input"]'),
        forgotUsernameText: () => cy.get('[data-testid="forgot_userName_link"]'),
        passwordText: () => cy.get('.styles_formGroup2___aa7w > [data-testid="label"]'),
        passwordInput: () => cy.get('[data-testid="password_input"]'),
        forgotPasswordText: () => cy.get('[data-testid="forgot_password_link"]'),
        LoginBtn: () => cy.get('[data-testid="state_user_login_button"]'),
        incorrectUsernameAndPasswordErrorMsg: () => cy.get('#validation_message'),

    }

    clickOnNYTDIcon() {
        this.elements.nytdIcon().invoke('removeAttr', 'target', '_blank').click();
    }

    clickOnPhoneNumber() {
        this.elements.phoneNumber().click();
    }

    clickOnEmail() {
        this.elements.email().click();
    }

    clickOnStateButton() {
        this.elements.stateUserBtn().click();
    }

    clickOnForgotUsername() {
        this.elements.forgotUsernameText().click();
    }
    clickOnForgotPassword() {
        this.elements.forgotPasswordText().click();
    }
    enterIncorrectUsernameAndPassword() {
        this.elements.usernameInput().type('abcdef');
        this.elements.passwordInput().type(12345);
    }

    verifyUsernameAndPasswordInputContainsSpecificValue() {
        this.elements.usernameInput().type('abcdef').should('have.value', 'abcdef').clear();
        this.elements.passwordInput().type(12345).should('have.value', '12345').clear();
    }
    clickOnLoginBtn() {
        this.elements.LoginBtn().click();
    }
    enterUsernameAndPassword(username, password) {
        this.elements.usernameInput().type(username, { log: false });
        this.elements.passwordInput().type(password, { log: false });
    }

}
export default HomePageObjects;