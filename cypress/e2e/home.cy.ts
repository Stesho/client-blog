describe('home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should implements intersection observer', () => {
    cy.get('[data-cy="ourMission"]').should('not.exist');
    cy.get('[data-cy="categories"]').should('not.exist');
    cy.get('[data-cy="whyWeStarted"]').should('not.exist');

    cy.scrollTo(0, 1000);

    cy.get('[data-cy="ourMission"]').should('exist');
    cy.get('[data-cy="categories"]').should('exist');
    cy.get('[data-cy="whyWeStarted"]').should('exist');
  });

  it('should switch slides on testimonials block', () => {
    cy.scrollTo(0, 1000);
    cy.get('[data-cy="testimonials"]').should('exist');
    cy.get('[data-cy="testimonialsPrevButton"]').should('be.disabled');
    cy.get('[data-cy="testimonialsNextButton"]')
      .should('not.be.disabled')
      .click()
      .click();
    cy.get('[data-cy="testimonialsNextButton"]').should('be.disabled');
    cy.get('[data-cy="testimonialsPrevButton"]').should('not.be.disabled');
  });

  it('should open modal with video about us', () => {
    cy.get('[data-cy="videoAboutUs"]').should('not.exist');
    cy.get('[data-cy="navBarButton"]').click();
    cy.get('[data-cy="videoAboutUs"]').should('exist');
    cy.get('[data-cy="modalCloseButton"]').click();
    cy.get('[data-cy="videoAboutUs"]').should('not.exist');
  });
});
