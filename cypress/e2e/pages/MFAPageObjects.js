import { authenticator, totp, hotp } from 'otplib';
const secret = 'BZ722EYYD323F5YMTTTGPSWAN6EAUAVFVSKZ3YAEC4M2OV6OX4KA';
const Atoken = authenticator.generate(secret);
class MFAPageObjects {
    elements = {
        mfaHeader: () => cy.get('#main_content').should('have.text', 'Multi-Factor Authentication'),
        passcodeText: () => cy.get('[data-testid="label"]'),
        passcodeInput: () => cy.get('[data-testid="passcode_input"]'),
        submitBtn: () => cy.get('[data-testid="MFA_submit_button"]'),
    }
    enterPasscode() {
        this.elements.passcodeInput().type(Atoken, { log: false });
    }
    clickOnSubmitBtn() {
        this.elements.submitBtn().click();
    }

}
export default MFAPageObjects;