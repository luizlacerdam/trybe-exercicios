const sum = require('./sum');

// requisito 1
describe ('Testa valores da função sum:', () => {
  test('quatro mais cinco é nove', () => {
    expect(sum(4,5)).toBe(9);
  });

  test('zero mais zero é zero', () => {
    expect(sum(0,0)).toBe(0);
  });

  test('verifica se há error quando há string', () => {
    expect(() => sum(4,'5')).toThrow(Error);
  });

  test('verifica se há error quando há string', () => {
    expect(() => sum(4,'5')).toThrow('parameters must be numbers');
  });

});

const myRemove = require('./myRemove');

// requisito 2
describe('Testa valores da função myRemove', () => {
  test('verifica se retira o numero 3 do array [1, 2, 3, 4, 5]',() => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

const myFizzBuzz = require('./myFizzBuzz');

// requisito 3
describe('Testa valores da função myFizzBuzz', () => {
  test('verifica se de acordo com o parametro recebido, retorna o valor esperado',() => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('15')).toBe(false);
  });
});