describe('The Home Page', function() {
    it('successfully loads', function() {
        cy.visit('/') // change URL to match your dev URL
    });
    it('changes the message of the test component', () => {
       cy.visit('/');

       cy.get('h1')
           .should('have.text', 'default');

       cy.get('button').click();

       cy.get('h1')
           .should('have.text', 'test message');
    });
});