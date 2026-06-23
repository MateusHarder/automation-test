# Automation Test

## Visão geral
Este projeto contém automação de testes Web e API usando Cypress e Cucumber.

## Estrutura do projeto
- `cypress/`
  - `e2e/` - arquivos `.feature` com cenários Gherkin
  - `support/`
    - `commands.js` - comandos customizados do Cypress
    - `e2e.js` - suporte carregado antes dos testes
    - `pages/` - page objects usados nos testes
    - `steps/` - definições de steps para Cucumber
  - `fixtures/` - dados de teste estáticos
- `cypress.config.js` - configuração do Cypress
- `cypress.env.example.json` - exemplo de variáveis de ambiente para commit
- `cypress.env.json` - variáveis de ambiente reais (ignorado pelo Git)
- `package.json` - dependências e scripts NPM

## Instalação do ambiente
1. Instale o Node.js (recomendado 18+). Você pode baixar em: https://nodejs.org/
2. Após a instalação, confirme no terminal com:

```bash
node -v
npm -v
```

3. Abra o terminal na pasta do projeto.
4. Execute:

```bash
npm install
```

## Plugins instalados
- `cypress` - framework de testes E2E
- `@badeball/cypress-cucumber-preprocessor` - preprocessor para Cucumber/Gherkin
- `@bahmutov/cypress-esbuild-preprocessor` - preprocessor de bundling com esbuild
- `esbuild` - bundler usado pelo Cypress preprocessor
- `cypress-plugin-api` - plugin para facilitar requisições HTTP/API em testes

## Variáveis de ambiente
Copie o arquivo de exemplo e ajuste suas credenciais locais:

```bash
cypress.env.example.json
```

Altere as variáveis conforme necessário:
- `USER_EMAIL`
- `USER_PASSWORD`
- `baseAPI` - URL base do endpoint de API utilizado no teste de Trello
- `idAction` - ID da action usada no teste de Trello

> `cypress.env.json` está listado em `.gitignore` e não deve ser committed.

## Cenários de teste implementados
- `cypress/e2e/web/login.feature` - fluxo de login e autenticação
- `cypress/e2e/web/produtos.feature` - busca e interação com produtos na loja
- `cypress/e2e/web/carrinho.feature` - adição ao carrinho e validação de itens/checkout
- `cypress/e2e/api/api.feature` - requisição GET ao endpoint de API e validação de resposta

## Comandos para dependências
- Instalar dependências:
  - `npm install`
- Atualizar dependências:
  - `npm update`

## Scripts NPM / execução de testes
- Abrir Cypress em modo interativo:
  - `npm run cypress:open`
- Executar todos os testes em modo headless:
  - `npm test`

## Observações
- Os arquivos de step definitions estão configurados em `cypress.config.js` para `cypress/support/steps/**/*.js`.
- Os testes `.feature` são encontrados em `cypress/e2e/**/*.feature`.
- Use `cypress.env.example.json` apenas como modelo; não coloque credenciais reais nesse arquivo.
- Se precisar rodar um feature específico, use:

```bash
npx cypress run --spec "cypress/e2e/web/nome-do-arquivo.feature"
```

