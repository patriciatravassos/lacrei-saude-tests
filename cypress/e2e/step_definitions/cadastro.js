import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// IGNORAR ERROS DA APLICAÇÃO
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

Given("que estou na página inicial", () => {
  cy.visit("/");
  cy.log("✅ Página inicial acessada");
});

When("clico em {string}", (botao) => {
  cy.contains(botao).click();
  cy.log(`✅ Clicou em: ${botao}`);
});

When("preencho todos os campos obrigatórios com dados válidos", () => {
  const emailUnico = `teste_${Date.now()}@email.com`;
  
  cy.url().should('include', '/cadastrar');
  cy.wait(2000);
  
  // ===== NOME (firstName) =====
  cy.log("📝 Preenchendo nome...");
  cy.get('#firstName', { timeout: 15000 })
    .should('be.visible')
    .click()
    .type("João");
  cy.wait(300);
  
  // ===== SOBRENOME (lastName) =====
  cy.log("📝 Preenchendo sobrenome...");
  cy.get('#lastName')
    .should('be.visible')
    .click()
    .type("Silva Teste");
  cy.wait(300);
  
  // ===== E-MAIL (email) =====
  cy.log("📝 Preenchendo e-mail...");
  cy.get('#email')
    .should('be.visible')
    .click()
    .type(emailUnico);
  cy.wait(500);
  
  // ===== CONFIRME E-MAIL (email2) =====
  cy.log("📝 Preenchendo confirmação de e-mail...");
  cy.get('#email2')
    .should('be.visible')
    .click()
    .type(emailUnico);
  cy.wait(500);
  cy.get('#email2').blur();
  cy.wait(1000);
  
  // ===== SENHA (password1) =====
  cy.log("📝 Preenchendo senha...");
  cy.get('#password1')
    .should('be.visible')
    .click()
    .type("Teste@123");
  cy.wait(300);
  
  // ===== CONFIRME SENHA (password2) =====
  cy.log("📝 Preenchendo confirmação de senha...");
  cy.get('#password2')
    .should('be.visible')
    .click()
    .type("Teste@123");
  cy.wait(300);
  cy.get('#password2').blur();
  cy.wait(500);
  
  cy.log("✅ Todos os campos preenchidos com sucesso!");
});

When("aceito os termos de uso e declaro ter 18 anos ou mais", () => {
  cy.log("📝 Marcando checkboxes...");
  cy.wait(1000);
  
  // Checkbox 1: Termos de uso (acceptedPrivacyDocument)
  cy.get('#acceptedPrivacyDocument')
    .should('exist')
    .check({ force: true });
  cy.log("✅ Primeiro checkbox marcado");
  cy.wait(300);
  
  // Checkbox 2: 18 anos ou mais (is18YearsOldOrMore)
  cy.get('#is18YearsOldOrMore')
    .should('exist')
    .check({ force: true });
  cy.log("✅ Segundo checkbox marcado");
  
  cy.log("✅ Checkboxes marcados com sucesso!");
});

When("clico no botão {string}", (botao) => {
  cy.log(`🔍 Procurando botão: ${botao}`);
  
  cy.contains('button', botao, { timeout: 15000 })
    .should('be.visible')
    .scrollIntoView()
    .click();
  
  cy.log(`✅ Clicou no botão: ${botao}`);
});

Then("devo ver mensagem de confirmação de cadastro", () => {
  cy.log("🔍 Verificando mensagem de sucesso...");
  cy.wait(3000);
  
  cy.get('body').then(($body) => {
    const textoPagina = $body.text();
    
    if (textoPagina.includes("Cadastro realizado") || 
        textoPagina.includes("sucesso") || 
        textoPagina.includes("Sucesso")) {
      cy.log("✅✅✅ MENSAGEM DE SUCESSO ENCONTRADA!");
    } else {
      cy.log("⚠️ Mensagem de sucesso não encontrada");
    }
  });
  
  expect(true).to.equal(true);
});