// create page object
// see commands cy.visit(), cy.get(), cy.contains(), cy.wait()
describe('Simple commands', () => {
  it('Catalog page', () => {
    cy.visit('https://rozetka.com.ua/ua/universalnye-mobilnye-batarei/c387969/');
    cy.get('.goods-tile').contains('Lenovo Go').should('exist');
    cy.wait(5000);
  });
});