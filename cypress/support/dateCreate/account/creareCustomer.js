Cypress.Commands.add('creareCustomer', (email) => {
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
        createCustomer("bearer " + respons.body.access_token, email)
     })
}

function createCustomer(tocken, email){

    cy.request({
        method: 'Post',
        url: 'http://wh-test.eks-env02.eks.whbettingengine.com:80/accounts/wh-test/customer',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': tocken
            },
        body: {
            "country":"LU",
            "creditAccount":true,
            "creditLimit":287419,
            "currency":"USD",
            "externalId":"TST39"+email,
            "firstName":"Elinor",
            "oddsFormat":"decimal",
            "stakeFactor":1.5,
            "surname":"Bynon",
            "title":"mr",
            "tradingNotes":"AGAINST",
            "isTestAccount":true,
            "cashOutEnabled":true
        }
     }).then((respons) => {
        expect(respons.status).to.eq(201)
        cy.writeFile('customer.json', respons.body)
     })
}
