Cypress.Commands.add("compararCampos", (resposta, respostaEsperada) => {
  for (let campo in respostaEsperada) {
    expect(resposta[campo], `Campo ${campo} deve ser igual`).to.equal(
      respostaEsperada[campo]
    );
  }
});
Cypress.Commands.add("compararSubCampos", (objeto, esperado) => {
  Object.entries(esperado).forEach(([chave, valor]) => {
    expect(objeto[chave], `Campo ${chave} deve ser igual`).to.equal(valor);
  });
});
