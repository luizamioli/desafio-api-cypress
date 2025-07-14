# Prova Técnica

Automação de Testes de API com Cypress

## Como rodar os testes

### 1. Clone o repositório

```bash
git clone https://github.com/luizamioli/desafio-api-cypress
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `cypress.env.json` na raiz do projeto e configure a URL base da API:

```json
{
  "baseUrl": "https://dummyjson.com",
  "username": "seu-usuario",
  "password": "sua-senha"
}
```

### 4. Execute os testes

Para rodar os testes:

```bash
npx cypress open
```
