Feature: Carrinho

  Background:
    Given que o usuário já esteja autenticado e pesquisado o produto "Summer White Top"

Scenario: Adicionar um produto no carrinho pela listagem de produtos
When clicar no botão Add To Cart
Then validar o modal de confirmação deve ser exibido "Added!" "Your product has been added to cart."
And clicar no botão View Cart
Then validar que o produto "Summer White Top" está presente na tela de carrinho com o preço "Rs. 400"
Then remove o produto do carrinho
And valida que o carrinho está vazio com a mensagem "Cart is empty!"

Scenario: Adicionar um produto no carrinho pela tela do produto
When clicar no botão View Product do produto
Then validar que o produto "Summer White Top" está presente na tela de detalhes do produto com o preço "Rs. 400"
When clicar no botão Add to cart em detalhe
Then validar o modal de confirmação deve ser exibido "Added!" "Your product has been added to cart."
And clicar no botão View Cart
Then validar que o produto "Summer White Top" está presente na tela de carrinho com o preço "Rs. 400"
Then remove o produto do carrinho
And valida que o carrinho está vazio com a mensagem "Cart is empty!"
 
Scenario: Validar o produto na tela de pagamento
When clicar no botão Add To Cart
And validar o modal de confirmação deve ser exibido "Added!" "Your product has been added to cart."
And clicar no botão View Cart
Then validar que o produto "Summer White Top" está presente na tela de carrinho com o preço "Rs. 400"
And clicar no botão Proceed To Checkout
Then validar acesso à tela de checkout
And validar as informações de endereço de entrega "Your delivery address" e endereço de cobrança "Your billing address"
And validar que o produto "Summer White Top" está presente na tela de pagamento com o preço "Rs. 400" e o total "Rs. 400"
Then Acessar o carrinho e remover o produto

Scenario: Validar mais de um produto no carrinho
When clicar no botão Add To Cart
And validar o modal de confirmação deve ser exibido "Added!" "Your product has been added to cart."
And clicar no botão Continue Shopping
Then validar que o usuário continua na página de produtos
And informa um produto no campo de busca "Soft Stretch Jeans"
And clica no botão de pesquisa
Then deve ver o produto listado nos resultados
And valida as informações do produto "Soft Stretch Jeans" "Rs. 799"
When clicar no botão Add To Cart
Then validar o modal de confirmação deve ser exibido "Added!" "Your product has been added to cart."
And clicar no botão View Cart
Then validar que o produto "Summer White Top" está presente na tela de carrinho com o preço "Rs. 400"
And validar que o produto "Soft Stretch Jeans" está presente na tela de carrinho com o preço "Rs. 799"
Then remove todos os produtos do carrinho
And valida que o carrinho está vazio com a mensagem "Cart is empty!"

Scenario: Validar mais de um produto na tela de pagamento
When clicar no botão Add To Cart
And validar o modal de confirmação deve ser exibido "Added!" "Your product has been added to cart."
And clicar no botão Continue Shopping
Then validar que o usuário continua na página de produtos
And informa um produto no campo de busca "Soft Stretch Jeans"
And clica no botão de pesquisa
Then deve ver o produto listado nos resultados
And valida as informações do produto "Soft Stretch Jeans" "Rs. 799"
When clicar no botão Add To Cart
Then validar o modal de confirmação deve ser exibido "Added!" "Your product has been added to cart."
And clicar no botão View Cart
Then validar que o produto "Summer White Top" está presente na tela de carrinho com o preço "Rs. 400"
And validar que o produto "Soft Stretch Jeans" está presente na tela de carrinho com o preço "Rs. 799"
And clicar no botão Proceed To Checkout
Then validar acesso à tela de checkout
And validar as informações de endereço de entrega "Your delivery address" e endereço de cobrança "Your billing address"
And validar que o produto "Summer White Top" está presente na tela de pagamento com o preço "Rs. 400" e o total "Rs. 400"
And validar que o produto "Soft Stretch Jeans" está presente na tela de pagamento com o preço "Rs. 799" e o total "Rs. 799"
And validar que o "Total Amount" do carrinho é "Rs. 1199"
Then Acessar o carrinho e remover o produto