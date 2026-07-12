describe('Transferência', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('credenciais').then((credenciais) => {
        cy.get('#username').click().type(credenciais.validos.usuario)
        cy.get('#senha').click().type(credenciais.validos.senha)
    })
    cy.contains('button', 'Entrar').click()
  })

  it('Deve realizar uma transferência quando os dados e valores forem válidos', () => {
    cy.get('label[for="conta-origem"]').parent().as('campoContaOrigem')
    cy.get('@campoContaOrigem').click()
    cy.get('@campoContaOrigem').contains('admin').click()

    cy.get('label[for="conta-destino"]').parent().as('campoContaDestino')
    cy.get('@campoContaDestino').click()
    cy.get('@campoContaDestino').contains('diretor').click()

    cy.get('#valor').click().type('11')

    cy.contains('button', 'Transferir').click()

    cy.get('.toast').should('have.text', 'Transferência realizada!')
  })
})