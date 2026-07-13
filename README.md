# Banco - Testes automatizados (Cypress)

Objetivo
--------
Demonstrar práticas de automação de testes end-to-end com Cypress e JavaScript aplicadas ao projeto "Banco". O conjunto de testes valida fluxos de login e transferências e serve como referência de organização com Custom Commands e geração de relatórios.

Componentes do projeto
----------------------
- cypress/e2e/  
  - login.cy.js — testes de login.  
  - transferencia.cy.js — testes de transferência (cenários positivos e de erro).  
- cypress/fixtures/ — dados de teste (ex.: credenciais.json).  
- cypress/support/  
  - commands/ (common.js, login.js, transferencia.js) — comandos customizados reutilizáveis.  
  - e2e.js — bootstrapping / registro de comandos.  
- cypress/reports/html/ — relatórios gerados pelo cypress-mochawesome-reporter.  
- screenshots/ — imagens capturadas durante os testes.  
- package.json — dependências e scripts do projeto.

Pré-requisitos
--------------
- Node.js (recomendado v14+).  
- API: https://github.com/juliodelimas/banco-api (deve estar em execução).  
- Aplicação web: https://github.com/juliodelimas/banco-web (deve estar em execução).  
  -> A automação assume que API e front-end estão acessíveis (URLs/ports conforme configuração do ambiente).

Instalação
---------
1. Abrir terminal na pasta do projeto:
   - Windows (PowerShell / CMD):  
     cd "c:\Users\NITRO V15\Desktop\mentoria\banco-web-tests"
2. Instalar dependências:
   - npm install

Execução dos testes
-------------------
- Abrir interface interativa do Cypress:
  - npx cypress open
- Executar em modo headless (CLI):
  - npx cypress run --spec "cypress/e2e/*.cy.js"
- Gerar relatórios com cypress-mochawesome-reporter:
  - npx cypress run --spec "cypress/e2e/*.cy.js" --reporter cypress-mochawesome-reporter
- Relatórios HTML gerados em:
  - cypress/reports/html/index.html
- Screenshots e vídeos (quando configurados) ficam nas pastas padrão do Cypress.

Documentação dos testes
-----------------------
- login.cy.js:
  - Valida fluxo de autenticação com credenciais válidas e cenários de falha (campos obrigatórios / credenciais inválidas).
- transferencia.cy.js:
  - Cobre cenários de transferência entre contas, incluindo casos de valor maior que o saldo, tentativas sem token/autenticação e validação de mensagens de erro/sucesso.

Custom Commands
---------------
Os comandos customizados estão em cypress/support/commands/ e são registrados em cypress/support/e2e.js. Eles encapsulam passos reutilizáveis para deixar os testes mais legíveis e manter DRY. Exemplos de responsabilidades:
- login.js — ações de login (preencher usuário/senha e submeter). Uso típico: cy.login(...) (nome real conforme implementação).
- transferencia.js — ações para preencher formulário de transferência, submeter e validar respostas.
- common.js — utilitários compartilhados (reset de estado, fixtures, helpers).

Verifique os arquivos em cypress/support/commands/ para os nomes e assinaturas reais das funções. Nos testes, os comandos customizados são usados para simplificar os fluxos e reduzir repetição.

Observações
----------
- Todas as dependências estão declaradas em package.json. Ajuste scripts ou variáveis de ambiente conforme seu ambiente (hosts/ports da API e do front-end).  
- Caso precise adaptar a porta/URL da aplicação, altere as configurações no código dos testes ou use variáveis de ambiente.

Contribuições
-------------
Pull requests e correções são bem-vindos. Para alterações estruturais, documente novos comandos e atualize este README.

Licença
-------
Repositório de exemplo para fins educacionais (verificar licença do repositório principal se aplicável).