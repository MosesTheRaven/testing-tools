describe('DMS testing', function() {
    it('Tries the login', function() {
      cy.visit('https://dms.objectify.sk/dms-app')
      cy.get('fieldset').as('loginForm')
      cy.get('@loginForm').find('input[type="text"]').type('matus')
      cy.get('@loginForm').find('input[type="password"]').type('matus')
      cy.contains('Log in').click()
      cy.contains('Filter')
      cy.get('.dropdown > .form-control').as('searchInput')
      cy.get('@searchInput').click()
      cy.wait(1000)
      cy.get('@searchInput').type('CELINE')
      cy.get('[ng-repeat="s in suggestions.tagsSuggestions"] > .ng-binding').click()
    })
  })
  