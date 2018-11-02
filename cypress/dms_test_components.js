describe('DMS testing', function() {
    it('Checks the login page', function() {
      cy.visit('https://dms.objectify.sk/dms-app')
      cy.contains('Login')
      cy.get('fieldset').as('loginForm')
      cy.get('@loginForm').find('input[type="text"]')
      cy.get('@loginForm').find('input[type="password"]')
      cy.contains('Log in')
    })
  })