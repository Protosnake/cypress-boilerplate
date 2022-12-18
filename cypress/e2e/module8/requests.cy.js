describe.skip('API requests', () => {
  it('Intercept', () => {
    cy.visit('https://rozetka.com.ua/');
    cy.intercept('GET', 'https://common-api.rozetka.com.ua/v2/goods/get-price/**').as('getPrice');
    cy.get('.main-goods__cell').first().click();
    cy.wait('@getPrice').then((interception) => {
      expect(interception.response).to.have.property('statusCode', 200);
      expect(JSON.parse(interception.response.body)).to.have.property('price');
    });
  });

  it('Binance request', () => {
    cy.request('https://api2.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('symbol', 'ETHUSDT');
    });
  });
});