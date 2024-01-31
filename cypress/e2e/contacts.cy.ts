describe('', () => {
  beforeEach(() => {
    cy.visit('/contacts');
  });

  it('should correctly render form and map', () => {
    cy.get('[data-cy="contactsForm"]').should('exist');
    cy.get('[data-cy="map"]').should('exist');
  });

  it('should show error messages in email form', () => {
    cy.get('[data-cy="contactsNameInputError"]').should('not.exist');
    cy.get('[data-cy="contactsEmailInputError"]').should('not.exist');
    cy.get('[data-cy="contactsMessageInputError"]').should('not.exist');

    cy.get('[data-cy="sendButton"]').click();

    cy.get('[data-cy="contactsNameInputError"]').should('exist');
    cy.get('[data-cy="contactsEmailInputError"]').should('exist');
    cy.get('[data-cy="contactsMessageInputError"]').should('exist');

    cy.get('[data-cy="contactsNameInput"]').type('Username');
    cy.get('[data-cy="contactsEmailInput"]').type('testEmail@test.test');
    cy.get('[data-cy="contactsMessageInput"]').type('message');

    cy.get('[data-cy="contactsNameInputError"]').should('not.exist');
    cy.get('[data-cy="contactsEmailInputError"]').should('not.exist');
    cy.get('[data-cy="contactsMessageInputError"]').should('not.exist');
  });
});
