// cy.first(), cy.last(), cy.find(), cy.filter(), cy.not(), cy.each(), cy.then() + cy.wrap()
// No promises no excuses, все сталося само собою

describe('Cypress commands', () => {
  it('Catalog page', () => {
    const productCount = 47;
    cy.visit('https://www.ctrs.com.ua/smartfony/brand-samsung/');
    cy.get('.catalog-facet > div').as('catalog');
    cy.get('@catalog').first().should('contain', 'S21 FE');
    cy.get('@catalog').last().should('contain', 'Показати ще');
    cy.get('@catalog').first().find('a').should('have.attr', 'href', '/smartfony/g990b-zaf-gray-samsung-s21fe-6128-gb-new-707505.html');
    cy.get('@catalog').filter('.card').should('have.length', 1);
    cy.get('@catalog').not('.card').should('have.length', productCount);
    cy.get('@catalog').not('.card').each(($el) => {
      cy.wrap($el).should('contain', 'Samsung');
    });
    cy.get('@catalog').then(($el) => {
      // all product cards + show more button
      expect($el).to.have.length(productCount + 1);
    });
  });
});
