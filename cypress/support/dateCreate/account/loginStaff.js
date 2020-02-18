Cypress.Commands.add('login', () => {

    cy.email().then((resp) => {
        cy.createStaffAccount(resp)
        cy.visit('/login')
        cy.get('[label="Email address"]')
        .type(resp)
        .should('have.value', resp)

        cy.get('[type="password"]')
        .type('123456789')

        cy.get('form').submit()
    })        

})
