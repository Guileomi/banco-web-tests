describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.screenshot('ao-abrir-a-pagina-de-login')
  })

  it('Login com dados válidos deve ser realizado com sucesso', () => {

    cy.fixture('credenciais').then((credenciais) => {
    //Act
    cy.get('#username').click().type(credenciais.validos.usuario)
    cy.get('#senha').click().type(credenciais.validos.senha)
    cy.contains('button', 'Entrar').click()
    cy.screenshot('ao-clicar-no-botao-entrar')
    })

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve exibir mensagem de erro', () => {
    
    cy.fixture('credenciais').then((credenciais) => {
    //Act
    cy.get('#username').click().type(credenciais.invalidos.usuario)
    cy.get('#senha').click().type(credenciais.invalidos.senha)
    })
    cy.contains('button', 'Entrar').click()
  
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})