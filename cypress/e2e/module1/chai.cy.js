// availiable assertions
// https://docs.cypress.io/guides/references/assertions#Chai

// Most used ones in my experience
// equals
// not equals
// be true
// be ok
// contain
// have length
// throw
// be visible

// check text
// check array have and not have
// check object
// check logical expressions (===, !==, &&, ||)
// check function output
// check function throws

import { expect } from 'chai';

describe.skip('Chai library', () => {
  it('Chai library', () => {
    expect(2 + 2).equals(4);
    cy.wrap(2 + 2).should('equal', 4);
  });
});
