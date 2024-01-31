describe('routing', () => {
  it(`should correctly navigate on each page`, () => {
    cy.visit('/');
    cy.url().should('include', '/');
    cy.visit('/blog');
    cy.url().should('include', '/blog');
    cy.visit('/contacts');
    cy.url().should('include', '/contacts');
    cy.visit('/privacypolicy');
    cy.url().should('include', '/privacypolicy');
  });
});
