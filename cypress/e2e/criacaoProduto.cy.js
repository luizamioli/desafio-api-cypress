// <reference types="cypress" />
describe("Cenário: Criação de Produto", () => {
  let token;
  before(() => {
    cy.request({
      method: "POST",
      url: "/auth/login",
      body: {
        username: Cypress.env("username"),
        password: Cypress.env("password"),
      },
    }).then((response) => {
      token = response.body.accessToken;
    });
  });

  it("Deve criar um produto e verificar se todos os campos estâo presentes na resposta", () => {
    const novoProduto = {
      title: "Perfume Oil",
      description: "Mega Discount, Impression of A...",
      price: 13,
      discountPercentage: 8.4,
      rating: 4.26,
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/11/thumnail.jpg",
    };
    cy.request({
      method: "POST",
      url: "/products/add",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: novoProduto,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
      cy.log("ID do produto: ", response.body.id);
      cy.compararCampos(response.body, novoProduto);
    });
  });
});
