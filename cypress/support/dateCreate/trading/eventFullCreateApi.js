
Cypress.Commands.add('createFullEvent', (access_token, nameCom) => {
    createCompetition(access_token, nameCom)
})

function createCompetition(access_token, nameCom){
   
    cy.request({
        method: 'POST',
        url: 'http://wh-wv.eks-env12.eks.whbettingengine.com:80/operator-competitions/wh-wv',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': access_token,
            'Accept': 'application/json, text/plain',
            'X-Client-Req-Id': 'ce9df0fa-b086-440e-94f1-8d6253bf2d37',
            'Content-Type': 'application/json, charset=utf-8'
            },
        body: {
            "name":nameCom,
            "universe":"wh-wv",
            "sport": {
                "id":"football",
                "name":"Football",
                "displayOrder":0},
                "tags":{
                    "region":["europe"],
                    "country":["PL","GB","GB-WLS"]
                }
            }
     }).then((respons) => {
        expect(respons.status).to.eq(201)
        cy.writeFile('competition.json', respons.body)
        createEventApi(access_token, respons.body.id)
     })
        
}

function createEventApi(tocken, competitionID){

    cy.request({
        method: 'Post',
        url: 'http://wh-wv.eks-env12.eks.whbettingengine.com:80/operator-events/wh-wv',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': tocken,
            'Content-Type': 'application/json;charset=utf-8'
            },
        body:{
            "sport": {
              "id": "football",
              "name": "Football",
              "displayOrder": 0
            },
            "competition": {
              "id": competitionID
            },
            "template": {
              "id": "race"
            },
            "name": "Karole vs Angelika",
            "participants": [
              
            ],
            "startTime": "2020-02-19T13:03:25.370Z",
            "eventType": "MATCH"
          }
     }).then((respons) => {
        expect(respons.status).to.eq(201)
        cy.writeFile('event.json', respons.body)
     })
}