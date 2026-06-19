import LoginPage from "./pages/login/actions";
import ProdutosPage from "./pages/produtos/actions";
import CarrinhoPage from "./pages/carrinho.js/actions";

Cypress.Commands.add('login', () => {
    const email = Cypress.env('USER_EMAIL')
    const senha = Cypress.env('USER_PASSWORD')

    LoginPage.visit();
    LoginPage.preencherEmail(email)
    LoginPage.preencherSenha(senha)
    LoginPage.clicarEntrar()
    LoginPage.verificarHome()
})

Cypress.Commands.add('acessarMenuProducts', () => {
    ProdutosPage.selecionarMenuProducts()
    ProdutosPage.validarMenuProducts()
})

Cypress.Commands.add('buscarProduto', (produto) => {
    ProdutosPage.preencherBusca(produto)
    ProdutosPage.clicarBusca()
    ProdutosPage.validarCardProduto()
})

Cypress.Commands.add('selecionaProduto', (nome, preco) => {
    ProdutosPage.clicarBotaoViewProduct()
})

Cypress.Commands.add('modalConfirmacaoAdded', (titulo, mensagem) => {
    CarrinhoPage.validarModalConfirmacao()
    CarrinhoPage.validarTituloModal(titulo)
    CarrinhoPage.validarMensagemModal(mensagem)
    CarrinhoPage.validarLinkToCart()
    CarrinhoPage.validarButtonContinueShopping()
})