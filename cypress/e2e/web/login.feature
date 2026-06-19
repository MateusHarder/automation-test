Feature: Login na aplicação

  Background:
    Given que o usuário esteja na página de login

  Scenario: Login com usuário válido
    When o usuário informa o email
    And informa a senha 
    And clica no botão de entrar
    Then deve ser redirecionado para a tela home
    And deve ver a frase "Logged in as Teste Automação"

  Scenario Outline: Login com senha inválida
    When o usuário informa o email
    And informa a senha inválida "t7hpLXHdOgkegA"
    And clica no botão de entrar
    Then deve ver a mensagem "Your email or password is incorrect!"
