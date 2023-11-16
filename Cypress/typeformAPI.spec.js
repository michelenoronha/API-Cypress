const sampleForm = require('../fixtures/sampleForm.json');
const API_URL = Cypress.env('API_BASE_URL');
const authorization = `Bearer ${Cypress.env('TYPEFORM_ACCESS_TOKEN')}`;

it('retrieves my user information', () => {
  cy.request({
    method: 'GET',
    url: `${API_URL}forms/${Cypress.env('formId')}/responses`,
    headers: { authorization },
  }).should(({ status, body }) => {
    const { alias, email, language } = body;
    // Adicione aqui suas verificações usando as variáveis 'alias', 'email' e 'language'
    // Por exemplo:
    expect(status).to.eq(200);
    expect(alias).to.eq('Walmyr Filho');
    expect(email).to.eq(Cypress.env('username')); // Corrigindo a string
    expect(language).to.eq('en');
  });
});

it('retrieves form response', () => {
  cy.request({
    method: 'GET',
    url: `${API_URL}forms/${Cypress.env('formId')}/responses`,
    headers: { authorization },
  }).should(({ status, body }) => {
    expect(status).to.eq(200);
    // Adicione expect adicional conforme necessário
  });
});

it('retrieve form responses', () => {
  cy.request({
    method: 'GET',
    url: `${API_URL}forms/${Cypress.env('formId')}/responses`,
    headers: { authorization },
  }).then((response) => {
    expect(response.status).to.eq(200);
    // Adicione expect adicional conforme necessário
  });
});

it('creates a sample form', () => {
  cy.request({
    method: 'POST',
    url: `${API_URL}forms`,
    headers: { authorization },
    body: sampleForm,
  });
});
