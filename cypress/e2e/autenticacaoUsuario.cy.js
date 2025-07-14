/// <reference types="cypress" />

describe("Cenário: Login", () => {
  it("Deve enviar dados para fazer o login, fazer login com sucesso e validar a resposta", () => {
    cy.fixture("respostaEsperada").then((respostaEsperada) => {
      cy.request({
        method: "POST",
        url: "/auth/login",
        body: {
          username: Cypress.env("username"),
          password: Cypress.env("password"),
        },
      }).then((response) => {
        console.log("Resposta da API:", response.body);

        const token = response.body.accessToken;
        const user = response.body;

        expect(response.status).to.eq(200);

        expect(user.id).to.eq(respostaEsperada.id);
        expect(user.username).to.eq(respostaEsperada.username);
        expect(user.email).to.eq(respostaEsperada.email);
        expect(user.firstName).to.eq(respostaEsperada.firstName);
        expect(user.lastName).to.eq(respostaEsperada.lastName);
        expect(user.gender).to.eq(respostaEsperada.gender);
        expect(user.image).to.eq(respostaEsperada.image);

        expect(token, "Token deve estar presente").to.be.a("string").and.not.be
          .empty;
      });
    });
  });

  it("Deve listar usuários com paginação e validar quantidade máxima de 30", () => {
    cy.request("GET", `${Cypress.env("baseUrl")}/users?page=1`).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.users).to.have.length.of.at.most(30);
      }
    );
  });
});
