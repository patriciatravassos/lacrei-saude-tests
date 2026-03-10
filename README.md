# lacrei-saude-tests
 "Testes automatizados com Cypress + Cucumber"

 # Lacrei Saúde - Testes Automatizados 🏥

![Cypress](https://img.shields.io/badge/Cypress-12.17.4-brightgreen)
![Cucumber](https://img.shields.io/badge/Cucumber-10.0.0-green)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue)

## 📋 Sobre o Projeto
Automação de testes para o fluxo de **cadastro de pacientes** na plataforma Lacrei Saúde, utilizando **Cypress + Cucumber (Gherkin)**. Este projeto faz parte do desafio técnico para a vaga de Quality Assurance na Lacrei Saúde.

## 🚀 Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) v12.17.4 - Framework de testes
- [Cucumber](https://cucumber.io/) - Linguagem Gherkin para BDD
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- Node.js 18+

## 📁 Estrutura do Projeto
lacrei-saude-tests/
├── .github/
│ └── workflows/
│ └── test.yml # CI/CD com GitHub Actions
├── cypress/
│ ├── e2e/
│ │ ├── features/
│ │ │ └── cadastro.feature # Cenários em Gherkin
│ │ └── step_definitions/
│ │ └── cadastro.js # Steps em JavaScript
│ └── fixtures/ # Dados de teste (opcional)
├── .gitignore
├── cypress.config.js # Configuração do Cypress
├── package-lock.json
└── package.json # Dependências e scripts

## 🧪 Cenário Testado

### Fluxo de Cadastro
```gherkin
@cadastro_sucesso
Cenário: Cadastro realizado com sucesso
  Dado que estou na página inicial
  Quando clico em "Criar conta"
  E preencho todos os campos obrigatórios com dados válidos
  E aceito os termos de uso e declaro ter 18 anos ou mais
  E clico no botão "Cadastrar"
  Então devo ver mensagem de confirmação de cadastro
```

# Clone o repositório
git clone https://github.com/patriciatravassos/lacrei-saude-tests.git

# Entre na pasta
cd lacrei-saude-tests

# Instale as dependências
npm install

## 🚀 Como Executar os Testes

Após instalar as dependências:

```bash
# Modo interativo (abre a interface gráfica)
npm run test:open

# Modo headless (roda no terminal)
npm run test

# Em navegador específico
npm run test:chrome

```

## CI/CD com GitHub Actions
Este projeto utiliza GitHub Actions para execução automática dos testes a cada:

✅ Push para a branch main

✅ Pull request para main

## Para visualizar os resultados:

Acesse a aba Actions do repositório

Clique na execução mais recente

Veja os relatórios e screenshots

## 📊 Resultados dos Testes
Cenário	Status
Cadastro com dados válidos	✅ PASSOU

## 🐛 Observações Técnicas

Durante o desenvolvimento, foram identificados e tratados:

Erros React #418 e #423: Ignorados com Cypress.on('uncaught:exception')

Checkboxes invisíveis: Resolvido com { force: true }

Timeouts: Ajustados para 15000ms

## 👩‍💻 Autora
Patricia Travassos
Desafio Técnico - Lacrei Saúde (QA Júnior)
