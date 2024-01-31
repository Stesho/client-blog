describe('category page', () => {
  beforeEach(() => {
    cy.visit('category/business');
  });

  it('should render posts with selected category', () => {
    cy.get('[data-cy="post1"]').should('exist');
    cy.get('[data-cy="post7"]').should('exist');

    cy.get('[data-cy="post5"]').should('not.exist');
    cy.get('[data-cy="post6"]').should('not.exist');
    cy.get('[data-cy="post2"]').should('not.exist');

    cy.get('[data-cy="startupButton"]').click();

    cy.get('[data-cy="post1"]').should('not.exist');
    cy.get('[data-cy="post7"]').should('not.exist');

    cy.get('[data-cy="post2"]').should('exist');
    cy.get('[data-cy="post5"]').should('exist');
    cy.get('[data-cy="post6"]').should('exist');
  });

  it('should filter posts by tags', () => {
    cy.get('[data-cy="post1"]').should('exist');
    cy.get('[data-cy="post7"]').should('exist');

    cy.get('[data-cy="businessTag"]').click();

    cy.get('[data-cy="post1"]').should('exist');
    cy.get('[data-cy="post7"]').should('not.exist');
  });
});
