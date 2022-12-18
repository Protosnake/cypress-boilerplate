// Given, When, Then, And, But
// assert
describe('TDD vs BDD', () => {
  it('', () => {
    assert.equal(1, 1);
    assert.equal(1, 1, '1 is equal to 1');
    expect(1).to.equal(1);
    expect(1).to.equal(1, '1 is equal to 1');
    // 'should' keyword is a BDD style assertion
    cy.wrap(1).should('equal', 1);
  });

  [
    {
      a: 1,
      b: 1,
      expected: 2,
    },
    {
      a: 2,
      b: 2,
      expected: 4,
    },
  ].map(({ a, b, expected }) => it(`${a} + ${b} = ${expected}`, () => {
    // deconstructing the object
    // ({ a, b, expected }})
    // is the same as
    // (obj) => {
    //   const a = obj.a;
    //   const b = obj.b;
    //   const expected = obj.expected;
    // }
    expect(a + b).equals(expected);
  }))
});