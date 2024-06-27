class CommonPageObjects {
  elements = {
    url: () => cy.url(),
  }

  verifyUrl(url) {
    this.elements.url().should("include", url);
  }

}
export default CommonPageObjects;