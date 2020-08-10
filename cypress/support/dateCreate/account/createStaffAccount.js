Cypress.Commands.add('createStaffAccount', (email) => {
    receiveCredentionlStaff(email)
})

function receiveCredentionlStaff(email){
   
    cy.request(
        'POST',
        'http://wh-test.eks-env02.eks.whbettingengine.com:80/sessions/wh-test/program',
     '{"username":"website","password":"!2hmTSuFPmW8xK?m","grant_type":"password"}')
     .then((respons) => {
        expect(respons.status).to.eq(201)
        cy.writeFile('cypress/fixtures/program.json', respons.body)
        createStaff("bearer " + respons.body.access_token, email)
     })
}

function createStaff(tocken, email){

    cy.request({
        method: 'Post',
        url: 'http://wh-test.eks-env02.eks.whbettingengine.com:80/accounts/wh-test/staff',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': tocken
            },
        body: {
            "firstName":"Qsueenie",
            "surname":"Gedsorginia",
            "roles":["trader","backoffice-accounts-manager", "customer-accounts-manager","event-manager"],
            "jobTitle":"trader",
            "email":email,
            "password":"123456789"}
     }).then((respons) => {
        expect(respons.status).to.eq(201)
        cy.writeFile('trader.json', respons.body)
     })
}