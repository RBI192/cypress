//import '/support/util/randomizer.js'



describe('Check login in backoffice', () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    it('verify that the company logo and company name are present', () => {
        cy.contains('h2', 'Backoffice')
    })

    it('verify that reseve error when thr email is entered incorrect format', () => {

        
         const string = cy.generate_random_string(5)

        cy.log(string)
        
        cy.get('[label="Email address"]')
        .type(string)
        .should('have.value', "sadasd")
         
        cy.get('[type="password"]').focus()
        cy.get('[class="error-message-content"]').contains('Incorrect e-mail address.')

        cy.get('[name="email"]').focus().clear()
        .type(string+"@"+string)
        .should('have.value', string+"@"+string)
         
        cy.get('[type="password"]').focus()
        cy.get('[class="error-message-content"]', {timeout: 1}).contains('Incorrect e-mail address.')

    })

    it('verify that a trader can login with correct credentials', () => {

        let email = "sdfs@asdas.md"
       
        cy.createStaffAccount(email)

        cy.get('[label="Email address"]')
        .type(email)
        .should('have.value', email)

        cy.get('[type="password"]')
        .type('123456789')

        cy.get('form').submit()
    
    

    })


})