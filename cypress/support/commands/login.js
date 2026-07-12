Cypress.Commands.add('loginComCredenciaisValidas', (usuario, senha) => {
    cy.fixture('credenciais').then((credenciais) => {
    cy.get('#username').click().type(credenciais.validos.usuario)
    cy.get('#senha').click().type(credenciais.validos.senha)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('loginComCredenciaisInvalidas', (usuario, senha) => {
    cy.fixture('credenciais').then((credenciais) => {
    //Act
    cy.get('#username').click().type(credenciais.invalidos.usuario)
    cy.get('#senha').click().type(credenciais.invalidos.senha)
    })
    cy.contains('button', 'Entrar').click()
})