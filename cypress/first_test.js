describe('My First Test', function() {
    it('Checks the login page', function() {
      cy.visit('https://chat-12442.firebaseapp.com/')
      cy.contains('Nickname')
      cy.contains('Password')
      cy.contains('Login')
      cy.contains('Register')
      cy.contains('2018')
      cy.contains('In memoriam Adam')
    })
  })