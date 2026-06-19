import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/login/actions";
import ProdutosPage from "../../pages/produtos/actions";
import CarrinhoPage from "../../pages/carrinho.js/actions";

Given('que o usuário já esteja autenticado e pesquisado o produto {string}', (produto) => {
    cy.login()
    cy.acessarMenuProducts()
    cy.buscarProduto(produto)
})

When('clicar no botão Add To Cart', () => {
    ProdutosPage.clicarBotaoAddToCart()
})

Then('validar o modal de confirmação deve ser exibido {string} {string}', (titulo, mensagem) => {
    cy.modalConfirmacaoAdded(titulo, mensagem)
})

When('clicar no botão View Cart', () => {
    CarrinhoPage.clicarLinkToCart()
})

When('clicar no botão Continue Shopping', () => {
    CarrinhoPage.clicarContinueShopping()
})

Then('validar que o usuário continua na página de produtos', () => {
    cy.url().should('include', '/products')
})

Then('validar que o produto {string} está presente na tela de carrinho com o preço {string}', (nome, preco) => {
    cy.url().should('include', '/view_cart')
    CarrinhoPage.validarInformacoesCarrinho()
    CarrinhoPage.validarProdutoNoCarrinho(nome, preco)
})

Then('remove o produto do carrinho', () => {
    CarrinhoPage.deletarProduto()
})
Then('remove todos os produtos do carrinho', () => {
    CarrinhoPage.deletarTodosProdutos()
})

Then('valida que o carrinho está vazio com a mensagem {string}', (mensagem) => {
    CarrinhoPage.validarCarrinhoVazio(mensagem)
})  

When('clicar no botão View Product do produto', () => {   
    ProdutosPage.clicarBotaoViewProduct()
})

When('clicar no botão Add to cart em detalhe', () => {
    ProdutosPage.clicarBotaoAddToCartDetails()
})

Then ('validar que o produto {string} está presente na tela de detalhes do produto com o preço {string}', (nome, preco) => {
    ProdutosPage.validarNomeProdutoDetalhes(nome)
    ProdutosPage.validarPrecoProdutoDetalhes(preco)
    ProdutosPage.validarBotaoAddToCartDetalhes()
})
When('clicar no botão Proceed To Checkout', () => {
    CarrinhoPage.clicarProceedToCheckout()
})
Then('validar acesso à tela de checkout', () => {
    cy.url().should('include', '/checkout')
})
Then('validar as informações de endereço de entrega {string} e endereço de cobrança {string}', (deliveryAddress, billingAddress) => {
    CarrinhoPage.validarInformacoesEndereco(deliveryAddress, billingAddress)
})
Then('validar que o produto {string} está presente na tela de pagamento com o preço {string} e o total {string}', (nome, preco, totalPrice) => {
    CarrinhoPage.validarProdutoNaTelaDePagamento(nome, preco, totalPrice)
    // CarrinhoPage.validarTotalPriceCart(nome, totalPrice)
})
Then('validar que o {string} do carrinho é {string}', (labelTotalPrice, totalPrice) => {
    CarrinhoPage.validarTotalPriceCart(labelTotalPrice, totalPrice)
})
Then('Acessar o carrinho e remover o produto', () => {
    CarrinhoPage.acessarCarrinho()
    CarrinhoPage.deletarTodosProdutos()
    CarrinhoPage.validarCarrinhoVazio("Cart is empty!")
})
