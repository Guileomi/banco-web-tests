Cypress.Commands.add('verificarMensagemToast', (mensagemEsperada) => {
    cy.get('.toast').should('have.text', mensagemEsperada)
})

Cypress.Commands.add('selecionarOpcaoNaCombobox', (labeldoCampo, opcao) => {
    cy.get(`label[for="${labeldoCampo}"]`).parent().as(`campo-${labeldoCampo}`)
    cy.get(`@campo-${labeldoCampo}`).click()
    cy.get(`@campo-${labeldoCampo}`).contains(opcao).click()
})