describe('Login', () => {
  it('Login com dados válidos deve ser realizado com sucesso', () => {
    //Arrange
    cy.visit('http://localhost:4000')

    //Act
    cy.get('#username').click().type('admin')
    cy.get('#senha').click().type('senha123')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar transf').should('be.visible')
  })

  it('Login com dados inválidos deve exibir mensagem de erro', () => {
    cy.visit('http://localhost:4000')

    cy.get('#username').click().type('admin')
    cy.get('#senha').click().type('111111')
    cy.contains('button', 'Entrar').click()
  
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})