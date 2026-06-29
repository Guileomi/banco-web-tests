describe('Login', () => {
  it('Login com dados válidos deve ser realizado com sucesso', () => {
    //Arrange
    cy.visit('http://localhost:4000')

    //Act
    cy.get('#username').click().type('admin')
    cy.get('#senha').click().type('senha123')
    cy.get('#login-section > .btn').click()

    //Assert
    cy.contains('h4', 'Realizar transf').should('be.visible')
  })
})