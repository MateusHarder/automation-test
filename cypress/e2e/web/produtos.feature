Feature: Produtos

  Background:
    Given que o usuário já esteja autenticado

  Scenario: Acessar menu Products
    When o usuário acessar o menu Products
    Then valida o acesso ao menu Products

  Scenario: Buscar um produto
    When o usuário já estiver no menu de Products
    And informa um produto no campo de busca "Summer White Top"
    And clica no botão de pesquisa
    Then deve ver o produto listado nos resultados
    And valida as informações do produto "Summer White Top" "Rs. 400"

Scenario: Acessar um produto
    When o usuário já estiver no menu de Products
    And o usuário ter realizado a busca de um produto "Summer White Top"
    And clicar no botão View Product
    Then deve ser redirecionado para a página de detalhes do produto
    And deve ver as informações detalhadas do produto "Summer White Top" "Rs. 400"
