/**
 * Завдання 1
 * 
 * Використовуючи бібліотеку chai протестуйте функцію cy.fizzbuzz()
 * Функція приймає число і повертає:
 * - 'Fizz' якщо число ділиться на 3
 * - 'Buzz' якщо число ділиться на 5
 * - 'FizzBuzz' якщо число ділиться на 3 і 5
 * - число якщо число не ділиться на 3 і 5
 * 
 * Тести мають бути в одному describe блоку, але розбиті на окремі it блоки.
 * 
 */

/**
 * Завдання 2, з зірочкою
 * 
 * Створіть і протестуйте функцію countCoins(), яка приймає число і повертає об'єкт з кількістю монет
 * countCoins(0.99) => { quarters: 3, dimes: 2, nickels: 0, pennies: 4 }
 * countCoins(1.99) => { quarters: 7, dimes: 2, nickels: 0, pennies: 4 }
 * countCoins(2.99) => { quarters: 11, dimes: 2, nickels: 0, pennies: 4 }
 * 
 * Функцію можна строрити тут, або додати її до файлу cypress/support/commands.js в якості кастомної команди
 * Для інтересу, можете відійти від "класичного" варіанту цієї функції і рахувати не монети, а купюри
 */

describe.skip('FizzBuzz', () => {
  it(`'Fizz' якщо число ділиться на 3`, () => {
    // тут ваш код
  })
  it(`'Buzz' якщо число ділиться на 5`, () => {
    // тут ваш код
  })
  it(`'FizzBuzz' якщо число ділиться на 3 і 5`, () => {
    // тут ваш код
  })
  it(`число якщо число не ділиться на 3 і 5`, () => {
    // тут ваш код
  })
});

describe.skip('Count coins', () => {

});