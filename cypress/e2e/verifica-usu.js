/// <reference types="cypress" />

describe("Teste  para verificção de usuários", () => {
  const statusEsperado = 200;
  const urlBase = "https://dummyjson.com/users";

  it("Deve retornar o status 200 na requisiçcão GET ", () => {
    cy.request(
        method: 'GET', 
        url: urlBase, ).then((response) => {
      if (response.status === statusEsperado) {
        cy.log(`A requisição deu certo! Status ${statusEsperado} OK`);
      } else {
        cy.log(`A requisição falhou! Status ${response.status}`);
      }
      expect(response.status).to.eq(statusEsperado);
    });
  });

  it("Deve verificar se cada usuário tem os dados obrigatórios e se o endpoint retorna no máximo 30 usuários", () => {
    cy.request("GET", urlBase).then((response) => {
      cy.log("Validando o status da resposta...");

      expect(response.body).to.have.property("users");
      // Verifica se existe a propriedade "users"
      expect(response.body.users).to.be.an("array");

      // Verifica se "users" é um array
      cy.log("O número de usuários retornados é ${response.body.users.length}");
      expect(response.body.users.length).to.be.lte(30);

      response.body.users.forEach((user) => {
        expect(user).to.have.property("id");
        expect(user).to.have.property("firstName");
        expect(user).to.have.property("lastName");
        expect(user).to.have.property("age");
        expect(user).to.have.property("gender");
        expect(user).to.have.property("email");
        expect(user).to.have.property("username");
        expect(user).to.have.property("birthDate");
        expect(user).to.have.property("role");
      });
    });
  });
});
