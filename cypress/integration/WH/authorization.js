describe('Check login in backoffice', () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    it('verify that the company logo and company name are present', () => {
        cy.contains('h2', 'Backoffice')
    })

    it('verify that reseve error when thr email is entered incorrect format', () => {

        
         cy.name().then((res) => {
        
        cy.get('[label="Email address"]')
        .type(res)
        .should('have.value', res)
         
        cy.get('[type="password"]').focus()
        cy.get('[class="error-message-content"]').contains('Incorrect e-mail address.')

        cy.get('[name="email"]').focus().clear()
        .type(res+"@"+res)
        .should('have.value', res+"@"+res)
         
        cy.get('[type="password"]').focus()
        cy.get('[class="error-message-content"]', {timeout: 1}).contains('Incorrect e-mail address.')

    })
})

    it('verify that a trader can login with correct credentials', () => {

        cy.email().then((email) => {
       
        cy.createStaffAccount(email)

        cy.get('[label="Email address"]')
        .type(email)
        .should('have.value', email)

        cy.get('[type="password"]')
        .type('123456789')

        cy.get('form').submit()
    
    
    })
    })


})