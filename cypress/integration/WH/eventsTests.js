describe('Create event from trading UI', () => {

    beforeEach(() => {
        cy.login()
    })

it('allow to create event', () => {
    

    cy.contains('Trading').click()

    const xhrData = [];

    cy.get('[data-test=competition] > :nth-child(1) > .Select > .Select-control > .Select-input').click()
    cy.get('[data-test=competition] > :nth-child(1) > .action-dropdown-add').click()
    cy.get('[data-test=name] > input').type('compeTEST')
    cy.get('[data-test=sport] > select').select('football')
    cy.get('[data-test=active] > label > span').click()
    cy.get('[data-test=display] > label > span').click()
    cy.get('.buttons > .btn').click()
    cy.server({
        // Here we handle all requests passing through Cypress' server
        onResponse: (response) => {
          if (Cypress.env('RECORD')) {
            const url = response.url;
            const method = response.method;
            const data = response.body;
            // We push a new entry into the xhrData array
            xhrData.push({ url, method, data });
          }
        }
    })

    
    cy.contains('Create event').click()
    cy.get('[data-test=sport] > select').select('football')
    cy.get('[title="Sport"] > .btn').click()
    cy.get('[data-test=competition] > select').select('')

})

})