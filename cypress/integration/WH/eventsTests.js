describe('Create event from trading UI', () => {
    before(() => {
        cy.login()
    })

it('allow to create event', () => {

    cy.name().then((competitionName) => {
    cy.competition(competitionName)
    cy.eventCreate(competitionName)

    cy.get('.event-details-header > h3').contains(competitionName)
  })    
})

})