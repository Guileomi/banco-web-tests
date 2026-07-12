describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.screenshot('ao-abrir-a-pagina-de-login')
  })

  it('Login com dados válidos deve ser realizado com sucesso', () => {

    //Act
    cy.loginComCredenciaisValidas()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve exibir mensagem de erro', () => {

    //Act
    cy.loginComCredenciaisInvalidas()

    //Assert
    cy.verificarMensagemToast('Erro no login. Tente novamente.')
  })
})