import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/login/actions";
import ProdutosPage from "../../pages/produtos/actions";



Given('que o usuário já esteja autenticado', () => {
  cy.login()
})

When('o usuário acessar o menu Products', () => {
  ProdutosPage.selecionarMenuProducts()
})

Then('valida o acesso ao menu Products', () => {
  ProdutosPage.validarMenuProducts()
})

When('o usuário já estiver no menu de Products', () => {
  cy.acessarMenuProducts()
})

When('informa um produto no campo de busca {string}', (produto) => {
  ProdutosPage.preencherBusca(produto)
})

When('clica no botão de pesquisa', () => {
  ProdutosPage.clicarBusca()
})

Then('deve ver o produto listado nos resultados', () => {
  ProdutosPage.validarCardProduto()
})

Then('valida as informações do produto {string} {string}', (nome, preco) => {
  ProdutosPage.validarNomeProduto(nome)
  ProdutosPage.validarPrecoProduto(preco)
  ProdutosPage.validarBotaoAddToCart()
  ProdutosPage.validarBotaoViewProduct()
})

When('o usuário ter realizado a busca de um produto {string}', (produto) => {
  cy.buscarProduto(produto)
})

When('clicar no botão View Product', () => {
  ProdutosPage.clicarBotaoViewProduct()
})

Then('deve ser redirecionado para a página de detalhes do produto', () => {
  cy.url().should('include', '/product_details')
})

Then('deve ver as informações detalhadas do produto {string} {string}', (nome, preco) => {
  ProdutosPage.validarNomeProdutoDetalhes(nome)
  ProdutosPage.validarPrecoProdutoDetalhes(preco)
  ProdutosPage.validarBotaoAddToCartDetalhes()
})