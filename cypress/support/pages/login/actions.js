import {el} from './elements'

class LoginPage {
    visit() {
        cy.visit('/login')
    }
    preencherEmail(email) {
        cy.get(el.emailInput).type(email)
    }
    preencherSenha(senha) {
        cy.get(el.passwordInput).type(senha)
    }
    clicarEntrar() {
        cy.get(el.entrarButton).click()
    }
    verificarHome() {
        cy.get(el.logoutButton).should('be.visible')
    }
    verificarFrase(frase) {
        cy.get(el.loggedMessage).contains(frase)
    }
    verificarMensagem(mensagem) {
        cy.get(el.homeMessage).should('have.text', mensagem)
    }
}

export default new LoginPage();