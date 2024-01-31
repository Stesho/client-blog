describe('internationalization', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should switch language', () => {
    cy.contains('Home').should('exist');
    cy.contains('Главная').should('not.exist');
    cy.get('[data-cy="langSelect"]').select(1);
    cy.contains('Home').should('not.exist');
    cy.contains('Главная').should('exist');
  });
});
