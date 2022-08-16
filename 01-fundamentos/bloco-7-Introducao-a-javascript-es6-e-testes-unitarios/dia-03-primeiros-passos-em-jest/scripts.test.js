const sum = require('./scripts');

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