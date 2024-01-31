describe('footer', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should validate input', () => {
    cy.get('[data-cy="emailInputError"]').should('not.exist');
    cy.get('[data-cy="subscribeButton"]').click();
    cy.get('[data-cy="emailInputError"]').should('exist');
    cy.get('[data-cy="emailInput"]').type('testEmail@test.test');
    cy.get('[data-cy="emailInputError"]').should('not.exist');
  });
});
