class CommonPageObjects {
  elements = {
    url: () => cy.url(), // This method will take the current url.
  }

  verifyUrl(url) {
    this.elements.url().should("include", url);
  }

}
export default CommonPageObjects;