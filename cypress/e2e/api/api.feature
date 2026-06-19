Feature: Trello API
@focus 
  Scenario: Buscar action e validar campo name da estrutura list
    Given que o usuário faça uma requisição GET para o endpoint "baseAPI" com o ID "idAction"
    Then o status code da resposta deve ser 200
    And o campo "name" da estrutura "list" deve estar presente na resposta