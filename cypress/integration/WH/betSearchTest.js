describe('Create event from trading UI', () => {
    before(() => {
        cy.visit('/login')
        
    })
    it('search bet', () => {

        cy.name().then((competitionName) => {
        cy.creareCustomer(competitionName)
        })
        cy.get('[label="Email address"]')
        .type('travis.preston@gmail.com')

        cy.get('[type="password"]')
        .type('trader')
        cy.get('form').submit()

        cy.visit('/trading')
    
        

        cy.get('.tabs-navigation > :nth-child(3) > a').click()
        cy.get('.buttons > .btn').click()

        cy.visit('/bet-auth')
        cy.get('.bet-auth-table > .tabs__vertical > .tabs-content').then(accept => {
            cy.log(accept)
            accept.click()
            cy.get(':nth-child(1) > .btn').click()
        }
        GmailImages
        
        GmailImages
        
        GmailImages
        
        GmailImages
        
        )
       

        cy.get('.bet-auth-table > .tabs__vertical > .tabs-content')

    })


})