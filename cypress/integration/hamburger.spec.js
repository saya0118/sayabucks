describe('Hamburger header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/gift');
  });

  describe('when in wide desktop layout', () => {
    beforeEach(() => {
      cy.viewport(1024, 768);
    });

    it('should hide the hamburger icon', () => {
      cy.getBySel('hamburger').should('not.be.visible');
    });
  });

  describe('when in narrow mobile layout', () => {
    beforeEach(() => {
      cy.viewport(400, 400);
    });

    it('should show the hamburger icon', () => {
      cy.getBySel('hamburger').should('be.visible');
    });

    it('should show the first ad', () => {
      cy.contains('Free faves').should('be.visible');
    });

    it('should let user scroll to bottom, open About Starbucks, and click on Our Coffee link', () => {
      cy.getBySel('footer-about-starbucks-arrow').scrollIntoView().click();
      cy.contains('Our Coffee').click();
      cy.url().should('eq', 'https://www.starbucks.ca/coffee/');
    });
  });
});
