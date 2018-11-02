describe('Login test', function() {
    it('Logs in', function() {
      cy.visit('https://chat-12442.firebaseapp.com/')
      cy.get('#nameInput').type('dajo')
      cy.get('#passwordInput').type('password')
      cy.contains('Login').click()
      cy.contains('Toolbar')
    })
  })