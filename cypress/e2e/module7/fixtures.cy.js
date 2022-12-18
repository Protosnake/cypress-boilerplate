describe.skip('Price and name', () => {
  it('fixture', () => {
    cy.fixture('products').then((products) => {
      products.forEach((product) => {
        expect(product).to.have.property('productName');
      });
    });
  });
});