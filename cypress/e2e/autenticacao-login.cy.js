/// <reference types="cypress" />


describe("Teste  para verificção de usuários", () => {
  const urlBase = "https://dummyjson.com/auth/login";

  it("Deve enviar dados para fazer o login, fazer login com sucesso e validar a resposta", () => {
    cy.login("usuario", "senha");
    
    });
  
  });
