Cypress.Commands.add('eventCreate', (nameCompetition) => {
cy.contains('Create event').click()
    cy.get('[data-test=sport] > select').select('football')
    cy.get('[title="Sport"] > .btn').click()
    cy.get('[data-test=competition] > select').select(nameCompetition)
    cy.get('[title="Competition"] > .btn').click()
    cy.get('[data-test=event-type] > select').select('TNMT')
    cy.get('[title="Event type"] > .btn').click()
    cy.get('.create-event__step--start-time > :nth-child(1) > .datetime-input > .rdt > .form-control').type('2020-02-21 00:00:00')
    cy.get('[data-test=time-zone] > select').select('UTC')
    cy.get('.create-event__step--start-time > .btn').click()

})