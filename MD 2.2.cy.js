describe('DEMOQA', () => {
  context('Make an Appointment', () => {
    beforeEach(() => {
      cy.visit('https://katalon-demo-cura.herokuapp.com');
      //TextBoxPage.visit();
    });
 

    it('Grid Selection', () => {

      cy.visit('https://katalon-demo-cura.herokuapp.com/')

      cy.contains('Make Appointment').click()

      // login
      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('ThisIsNotAPassword')
      cy.get('#btn-login').click()

      // open menu
      cy.get('#menu-toggle').click()

      // sidebar is active
      cy.get('#sidebar-wrapper').should('have.class', 'active')

      // go to history
      cy.contains('History').click()

      // validate empty history
      cy.contains('No appointment').should('be.visible')



                   
    });
  });

});