describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
        cy.visit('https://example.cypress.io');

        cy.contains('type').click();

        cy.url().should('include', '/commands/action');

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})