describe('First test', () => {
  it('Visit google', () => {
    cy.visit('https://google.com');
    cy.get('title').should('contain', 'Google');
  })
})

