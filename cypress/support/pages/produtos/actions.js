import { el } from './elements'

class ProdutosPage {
    selecionarMenuProducts() {
        cy.get(el.menuProducts).click()
    }
    validarMenuProducts() {
        cy.url().should('include', '/products')
    }
    preencherBusca(produto) {
        cy.get(el.searchProduct).clear().type(produto)
    }
    clicarBusca() {
        cy.get(el.searchButton).click()
    }
    validarCardProduto() {
        cy.get(el.cardProduct).should('be.visible')
    }
    validarPrecoProduto(price) {
        cy.get(el.priceProduct).contains(price)
    }
    validarNomeProduto(name) {
        cy.get(el.nameProduct).contains(name)
    }
    validarBotaoAddToCart() {
        cy.get(el.buttonAddToCart).should('be.visible')
    }
    validarBotaoViewProduct() {
        cy.get(el.buttonViewProduct).should('be.visible')
    }
    clicarBotaoViewProduct() {
        cy.get(el.buttonViewProduct).click()
    }
    validarNomeProdutoDetalhes(name) {
        cy.get(el.nameProductDetails).contains(name)
    }
    validarPrecoProdutoDetalhes(price) {
        cy.get(el.priceProductDetails).contains(price)
    }
    validarBotaoAddToCartDetalhes() {
        cy.get(el.buttonAddToCartDetails).should('be.visible')
    }
    clicarBotaoAddToCartDetails() {
        cy.get(el.buttonAddToCartDetails).click()
    }
    clicarBotaoAddToCart() {
        cy.get(el.buttonAddToCart).first().click()
    }
    
}
export default new ProdutosPage();