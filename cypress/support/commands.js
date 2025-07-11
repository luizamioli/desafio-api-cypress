Cypress.Commands.add("login", (username, password) => {
  cy.request({
    method: 'POST',
    url: 'https://dummyjson.com/auth/login',
    body: {
      username,
      password
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
    // Você pode salvar o token, fazer validações, etc.
  });
});