import { el } from './elements'

class CarrinhoPage {
    validarModalConfirmacao() {
        cy.get(el.modalConfirmation).should('be.visible')
    }
    validarTituloModal(titulo) {
        cy.get(el.modalTitle).should('have.text', titulo)
    }
    validarMensagemModal(mensagem) {
        cy.get(el.modalMessage).should('have.text', mensagem)
    }
    validarLinkToCart() {
        cy.get(el.linkToCart).should('be.visible')
    }
    clicarLinkToCart() {
        cy.get(el.linkToCart).click()
    }
    validarButtonContinueShopping() {
        cy.get(el.buttonContinueShopping).should('be.visible')
    }
    clicarContinueShopping() {
        cy.get(el.buttonContinueShopping).click()
    }
    validarAcessoCarrinho() {
        cy.url().should('include', '/view_cart')
    }
    validarInformacoesCarrinho() {
        cy.get(el.cartinfo).should('be.visible')
    }
    validarProdutoVisivelNoCarrinho(name, price) {
        cy.get(el.productCart).should('be.visible')
    }
    validarProdutoNoCarrinho(name, price) {
        cy.contains(el.productNameCart, name)
            .parents('tr')
            .within(() => {
                cy.get(el.productNameCart).should('contain', name)
                cy.get(el.productPriceCart).should('contain', price)
            })
    }
    validarNomeProdutoNoCarrinho(name) {
        cy.get(el.productNameCart).should('contain', name)
    }
    validarPrecoProdutoNoCarrinho(price) {
        cy.get(el.productPriceCart).should('contain', price)
    }
    deletarProduto() {
        cy.get(el.deleteProductButton).click()
    }
    deletarTodosProdutos() {
        cy.get(el.deleteProductButton).each(($botao) => {
            cy.wrap($botao).click()
        })
    }
    validarCarrinhoVazio(mensagem) {
        cy.get(el.cartEmptyMessage).should('be.visible')
        cy.get(el.cartEmptyMessage).should('contain', mensagem)
    }
    clicarProceedToCheckout() {
        cy.get(el.buttonProceedToCheckout).click()
    }
    validarInformacoesEndereco(deliveryAddress, billingAddress) {
        cy.get(el.addressDetails).should('be.visible')
        cy.get(el.deliveryAddressDetails).should('be.visible')
        cy.get(el.deliveryAddressDetails).should('have.text', deliveryAddress)
        cy.get(el.billingAddressDetails).should('be.visible')
        cy.get(el.billingAddressDetails).should('have.text', billingAddress)
    }
    validarProdutoNaTelaDePagamento(name, price, totalPrice) {
        cy.get(el.addressDetails).should('be.visible')
        cy.contains(el.productNameCart, name)
            .parents('tr')
            .within(() => {
                cy.get(el.productNameCart).should('contain', name)
                cy.get(el.productPriceCart).should('contain', price)
                cy.get(el.totalPriceCart).should('contain', totalPrice)
            })
    }

    validarTotalPriceCart(labelTotalPrice, totalPrice) {
        cy.contains(labelTotalPrice)
          .closest('tr')
          .find(el.totalPriceCart)
          .should('be.visible')
          .and('contain', totalPrice)
    }

    acessarCarrinho() {
        cy.visit('/view_cart')
    }
}

export default new CarrinhoPage();