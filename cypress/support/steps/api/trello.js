import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import 'cypress-plugin-api'

let response

const getEnvOrValue = (value) => {
    const envValue = Cypress.env(value)
    return envValue !== undefined ? envValue : value
}

Given('que o usuário faça uma requisição GET para o endpoint {string} com o ID {string}', (baseAPI, idAction) => {
    const baseUrl = getEnvOrValue(baseAPI)
    const actionId = getEnvOrValue(idAction)

    return cy.api({
        method: 'GET',
        url: `${baseUrl}/actions/${actionId}`,
        failOnStatusCode: false
    }).then((res) => {
        response = res
    })
})

Then('o status code da resposta deve ser {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode)
})



Then('o campo {string} da estrutura {string} deve estar presente na resposta', (campo, estrutura) => {
  expect(response.body.data).to.have.property(estrutura)
  expect(response.body.data[estrutura]).to.have.property(campo)
  expect(response.body.data[estrutura][campo]).to.not.be.empty

  cy.log(`${estrutura}.${campo}: ${response.body.data[estrutura][campo]}`)
})