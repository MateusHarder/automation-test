import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/login/actions";


Given('que o usuário esteja na página de login', () => {
  LoginPage.visit();
});

When('o usuário informa o email', () => {
  const email = Cypress.env('USER_EMAIL')
  LoginPage.preencherEmail(email)
})

When('informa a senha', () => {
  const senha = Cypress.env('USER_PASSWORD')
  LoginPage.preencherSenha(senha)
})

When('informa a senha inválida {string}', (senha) => {
  LoginPage.preencherSenha(senha)
})

When('clica no botão de entrar', () => {
  LoginPage.clicarEntrar()
})

Then('deve ser redirecionado para a tela home', () => {
  LoginPage.verificarHome() 
})

Then('deve ver a frase {string}', (frase) => {
  LoginPage.verificarFrase(frase)
})

Then('deve ver a mensagem {string}', (mensagem) => {
  LoginPage.verificarMensagem(mensagem)
})