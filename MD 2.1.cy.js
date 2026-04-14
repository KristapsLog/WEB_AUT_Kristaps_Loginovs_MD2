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

      // fill form
      cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
      cy.get('#chk_hospotal_readmission').check()
      cy.get('#radio_program_medicaid').check()

      cy.get('#txt_visit_date').click()
      cy.contains('.day', '30').click()

      cy.get('#txt_comment').type('CURA Healthcare Service')

      cy.get('#btn-book-appointment').click()

      // ✅ validations
      cy.get('#facility').should('contain', 'Seoul CURA Healthcare Center')
      cy.get('#hospital_readmission').should('contain', 'Yes')
      cy.get('#program').should('contain', 'Medicaid')
      cy.get('#visit_date').should('contain', '30')
      cy.get('#comment').should('contain', 'CURA Healthcare Service')
        // set FullName field
        //cy.get('#userName').type('Steve Blowjobs')
        //TextBoxPage.nameField.type('Steve Blowjobs');

        // Set Email address
        // cy.get('#userEmail').type('Steve_Blowjobs@gmail.com')
        //cy.get('[id="userEmail"]').type('Steve_Blowjobs@gmail.com')

        // Set Curent address field
        //cy.get('#currentAddress').type('Rīgas iela 1')

        // Set Permanent field
        //cy.get('#permanentAddress').type('Valmieras iela 123')

        
        // Click button submit
        //cy.get('#submit').click()
        
        
        // Validate

        // Name:
        //cy.get('p#name').should('have.text','Name:Steve Blowjobs')

        // Email:
        //cy.get('p#email').should('have.text','Email:Steve_Blowjobs@gmail.com')

        // Current Adress:
        //cy.get('p#currentAddress').should('have.text','Current Address :Rīgas iela 1 ')
        
        // Permanent Adress:
        //cy.get('p#permanentAddress').should('have.text','Permananet Address :Valmieras iela 123')


                   
    });
  });

});