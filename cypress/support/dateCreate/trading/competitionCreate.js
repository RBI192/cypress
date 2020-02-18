Cypress.Commands.add('competition', (nameCompetition) => {

    cy.contains('Trading').click()
    cy.get('[data-test=competition] > :nth-child(1) > .Select > .Select-control > .Select-input').click()
    cy.get('[data-test=competition] > :nth-child(1) > .action-dropdown-add').click()
    cy.get('[data-test=name] > input').type(nameCompetition)
    cy.get('[data-test=sport] > select').select('football')
    cy.get('[data-test=active] > label > span').click()
    cy.get('[data-test=display] > label > span').click()
    cy.get('.buttons > .btn').click()

})

