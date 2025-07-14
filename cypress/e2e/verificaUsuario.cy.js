/// <reference types="cypress" />

describe("Cenário: Verificação de usuário", () => {
  const statusEsperado = 200;
  const urlBase = Cypress.env("baseUrl");

  it("Deve retornar o status 200 na requisição GET", () => {
    cy.request({
      method: "GET",
      url: `${urlBase}/users`,
    }).then((response) => {
      cy.log(`Status da resposta: ${response.status}`);
      expect(response.status).to.eq(statusEsperado);
    });
  });

  it("Deve verificar se cada usuário tem os dados obrigatórios e se o endpoint retorna no máximo 30 usuários", () => {
    cy.request({
      method: "GET",
      url: `${urlBase}/users`,
    }).then((response) => {
      cy.log("Validando o status da resposta...");
      expect(response.status).to.eq(statusEsperado);

      cy.log("Validando a estrutura da resposta...");
      expect(response.body).to.have.property("users");
      expect(response.body.users).to.be.an("array");

      cy.log(`O número de usuários retornados é ${response.body.users.length}`);
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
