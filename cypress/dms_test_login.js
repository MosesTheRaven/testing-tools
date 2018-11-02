describe('DMS testing', function() {
    it('Tries the login', function() {
      cy.visit('https://dms.objectify.sk/dms-app')
      cy.get('fieldset').as('loginForm')
      cy.get('@loginForm').find('input[type="text"]').type('xxx')
      cy.get('@loginForm').find('input[type="password"]').type('xxx')
      cy.contains('Log in').click()
      cy.contains('Filter')
    })
  })