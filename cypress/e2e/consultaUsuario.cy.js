/// <reference types="cypress" />
describe("Cenário: Consulta de usuário por ID", () => {
  it("Deve retornar os dados corretos do usuário", () => {
    cy.request({
      method: "GET",
      url: "/users/1",
    }).then((response) => {
      expect(response.status).to.eq(200);

      const user = response.body;
      cy.log(`Dados do usuário: ${JSON.stringify(user)}`);
      cy.compararCampos(response.body, {
        id: 1,
        firstName: "Emily",
        lastName: "Johnson",
        maidenName: "Smith",
        age: 28,
        gender: "female",
        email: "emily.johnson@x.dummyjson.com",
        phone: "+81 965-431-3024",
        birthDate: "1996-5-30",
        username: Cypress.env("username"),
        password: Cypress.env("password"),
        bloodGroup: "O-",
        height: 193.24,
        weight: 63.16,
        eyeColor: "Green",
        ip: "42.48.100.32",
        macAddress: "47:fa:41:18:ec:eb",
        university: "University of Wisconsin--Madison",
        ein: "977-175",
        ssn: "900-590-289",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
      });

      cy.compararSubCampos(user.hair, {
        color: "Brown",
        type: "Curly",
      });

      cy.compararSubCampos(user.address, {
        address: "626 Main Street",
        city: "Phoenix",
        state: "Mississippi",
        stateCode: "MS",
        postalCode: "29112",
        country: "United States",
      });

      cy.compararSubCampos(user.address.coordinates, {
        lat: -77.16213,
        lng: -92.084824,
      });

      cy.compararSubCampos(user.bank, {
        cardExpire: "03/26",
        cardNumber: "9289760655481815",
        cardType: "Elo",
        currency: "CNY",
        iban: "YPUXISOBI7TTHPK2BR3HAIXL",
      });

      cy.compararSubCampos(user.company, {
        department: "Engineering",
        name: "Dooley, Kozey and Cronin",
        title: "Sales Manager",
      });

      cy.compararSubCampos(user.company.address, {
        address: "263 Tenth Street",
        city: "San Francisco",
        state: "Wisconsin",
        stateCode: "WI",
        postalCode: "37657",
        country: "United States",
      });

      cy.compararSubCampos(user.company.address.coordinates, {
        lat: 71.814525,
        lng: -161.150263,
      });

      cy.compararSubCampos(user.crypto, {
        coin: "Bitcoin",
        wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        network: "Ethereum (ERC20)",
      });
      expect(user.role).to.be.oneOf(["admin", "moderator", "user"]);
      expect(user.image).to.be.a("string");
    });
  });
});
