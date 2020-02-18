Cypress.Commands.add('createStaffAccount', (email) => {
    receiveCredentionlStaff(email)
})

function receiveCredentionlStaff(email){
   
    cy.request(
        'POST', 
        'http://central.eks-env12.eks.whbettingengine.com:80/sessions/wh-wv/program',
     '{"username":"website","password":"!2hmTSuFPmW8xK?m","grant_type":"password"}')
     .then((respons) => {
        expect(respons.status).to.eq(201)
        cy.writeFile('program.json', respons.body)
        createStaff("bearer " + respons.body.access_token, email)
     })
}

function createStaff(tocken, email){

    cy.request({
        method: 'Post',
        url: 'http://central.eks-env12.eks.whbettingengine.com:80/accounts/wh-central/staff',
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