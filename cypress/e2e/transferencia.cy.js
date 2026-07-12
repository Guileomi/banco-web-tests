describe('Transferência', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.loginComCredenciaisValidas()
  })

  it('Deve realizar uma transferência quando os dados e valores forem válidos', () => {
    //Act
    cy.realizarTransferencia('admin', 'diretor', '10')

    //Assert
    cy.verificarMensagemToast('Transferência realizada!')
  })

  it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
    //Act
    cy.realizarTransferencia('diretor', 'admin', '5001')

    //Assert
    cy.verificarMensagemToast('Autenticação necessária para transferências acima de R$ 5.000,00.')
  })

  it('Deve apresentar erro quando tentar transferir valor maior que o saldo disponível', () => {
    //Act
    cy.realizarTransferencia('diretor', 'admin', '100000')

    //Assert
    cy.verificarMensagemToast('Saldo insuficiente para realizar a transferência.')
  })

  
})