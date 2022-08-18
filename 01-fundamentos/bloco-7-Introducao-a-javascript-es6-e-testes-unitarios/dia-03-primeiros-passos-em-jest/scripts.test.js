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

// requisito 4

const { encode, decode } = require('./encodeDecode.js');

describe('Testa a função encode e decode', () => {
  test('decode e encode são funções?',() => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('verifica na função encode se as voagais aeiou retornam 12345',() => {
    expect(encode('aeiou')).toBe('12345');
  });
  test('verifica na função decode se os numeros 12345 retornam as vogais aeiou',() => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('verifica se encode 67890 retornam 67890 ',() => {
    expect(encode('67890')).toBe('67890');
  });
  test('verifica se decode 67890 retornam 67890 ',() => {
    expect(decode('67890')).toBe('67890');
  });
  test('verifica se a string retorna o mesmo numero de caracteres em encode',() => {
    expect(encode('trybe').length).toBe(5);
  });
  test('verifica se a string retorna o mesmo numero de caracteres em decode',() => {
    expect(encode('tryb2').length).toBe(5);
  });
});

// requisito 5

const techList = require('./techList.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});