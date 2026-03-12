# lacrei-saude-tests
 "Testes automatizados com Cypress + Cucumber"

 # Lacrei Saúde - Testes Automatizados 🏥

![Cypress](https://img.shields.io/badge/Cypress-12.17.4-brightgreen)
![Cucumber](https://img.shields.io/badge/Cucumber-10.0.0-green)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue)

## 📋 Sobre o Projeto
Este repositório contém todo o projeto de Quality Assurance desenvolvido para a plataforma **Lacrei Saúde**, incluindo testes manuais, automatizados, de acessibilidade, performance e responsividade. A automação de testes para o fluxo de **cadastro de pacientes** na plataforma Lacrei Saúde, utilizando **Cypress + Cucumber (Gherkin)**. Este projeto faz parte do desafio técnico para a vaga de Quality Assurance na Lacrei Saúde.

> **Missão:** Garantir uma plataforma mais segura, acessível e acolhedora para a comunidade LGBTQIAPN+
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


## 📚 Documentação Completa

👉 **[ACESSE A DOCUMENTAÇÃO COMPLETA NO NOTION](https://www.notion.so/Lacrei-Sa-de-QA-31e70c4bd9fe80fbb1e7d0b55f6b3720?source=copy_link)**

### 🔗 Atalhos Rápidos para o Notion:

| Categoria | Link Direto |
|-----------|-------------|
| 📝 Casos de Teste em Gherkin e execução de Testes Manuais | [Ver casos de teste →](https://www.notion.so/Casos-de-Teste-31e70c4bd9fe80669b92d5d8c2c74853?source=copy_link) |
| 🐛 Relatório de Bugs | [Ver bugs encontrados →](https://www.notion.so/Registro-de-Bugs-e-Melhorias-31e70c4bd9fe800fa13efff00ae55c5a?source=copy_link) |
| ♿ Testes de Acessibilidade | [Ver resultados →](https://www.notion.so/Testes-de-Acessibilidade-31e70c4bd9fe8043b4a1cd07c748f832?source=copy_link) |
| ⚡ Testes de Performance | [Ver análises →](https://www.notion.so/Testes-de-Desempenho-Lighthouse-31e70c4bd9fe80b68d5cfed101c6f3dc?source=copy_link) |
| 📱 Testes de Responsividade | [Ver validações →](https://www.notion.so/Testes-de-Responsividade-31e70c4bd9fe8065bbc2f599bc0173a4?source=copy_link) |

## ✅ Checklist de Entregas

### Testes Funcionais (Mobile)
- [x] Fluxo de cadastro completo
- [x] Fluxo de busca e contato com profissional
- [x] Fluxo de recuperação de senha
- [x] Casos de teste em Gherkin documentados

### Testes de Acessibilidade
- [x] Navegação via teclado validada
- [x] Testes com leitores de tela (NVDA/VoiceOver)
- [x] Contraste e legibilidade verificados
- [x] **Nota Lighthouse ≥ 90**

### Testes de Performance
- [x] Tempo de resposta em operações críticas (<500ms)
- [x] Teste com 30 usuários simultâneos
- [x] Análise com Lighthouse

### Testes de Responsividade
- [x] Mobile (até 600px) - OK
- [x] Desktop (>1024px) - OK
- [x] Sem quebras críticas de layout

### Automação e CI/CD
- [x] Testes automatizados com Cypress + Cucumber
- [x] Fluxo de cadastro automatizado
- [x] Pipeline CI/CD via GitHub Actions
- [x] Relatórios automáticos

### Gestão de Bugs
- [x] Issues documentadas no GitHub
- [x] Registro detalhado no Notion
- [x] Priorização e impacto classificados

## 🤖 Testes Automatizados

### Tecnologias Utilizadas
- **Framework:** Cypress + Cucumber (Gherkin)
- **Linguagem:** JavaScript
- **CI/CD:** GitHub Actions
- **Relatórios:** Mochawesome

### 📦 Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- Git

### 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/patriciatravassos/lacrei-saude-tests.git

# Entre no diretório
cd lacrei-saude-tests

# Instale as dependências
npm install



## 🧪 Cenário Testado na Automação

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

Durante o desenvolvimento foram identificados e tratados  os seguintes pontos:

| Problema | Solução aplicada | Possível relação com bugs reportados |
|----------|-----------------|--------------------------------------|
| Erros React #418 e #423 | Ignorados com `Cypress.on('uncaught:exception')` | Podem estar relacionados ao CLS elevado (0.721) identificado na página de Cadastro e ao layout quebrado em mobile (BUG-005) |
| Checkboxes invisíveis | Resolvido com `{ force: true }` | Relacionado ao BUG-002 — checkboxes não acessíveis via teclado |
| Timeouts ajustados para 15000ms | Configurado no `cypress.config.js` | Relacionado à Performance baixa identificada no Lighthouse (49/100 em todas as páginas) |

### 🔍 Análise dos Erros React

**React Error #418 e #423 — Erros de Hidratação:**
Esses erros ocorrem quando o HTML gerado pelo servidor  diverge do que o React esperava renderizar no navegador.
Foram ignorados nos testes automatizados pois não bloqueiam o fluxo de cadastro, porém reforçam os problemas de  performance e layout já identificados nos testes manuais:

- O **CLS de 0.721** na página de Cadastro indica que elementos se movem durante o carregamento, comportamento   consistente com erros de hidratação do React
- O **layout quebrado em mobile** (BUG-005) pode ter origem no mesmo problema de renderização

## 👩‍💻 Autora
Patricia Travassos

Desafio Técnico - Lacrei Saúde (QA Júnior)
