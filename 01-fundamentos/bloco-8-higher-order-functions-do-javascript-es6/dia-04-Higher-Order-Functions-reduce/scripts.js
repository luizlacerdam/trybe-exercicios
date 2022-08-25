// // requisito 1
// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten(arr) { 
//   return arr.reduce((acc, curr) => acc.concat(curr));
// }
//console.log(flatten(arrays));

// requisito 2 dúvida no formato do ponto final e itens separados por vírgula 

// function reduceNames() {
//   return books.reduce((acc, book) =>  `${acc} ${book.author.name}.`, '')
// }
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames(arr) {
//   return arr.reduce(((acc,curr) => `${acc} ${curr.name},`), '');
// }
// console.log(reduceNames(books));

// requisito 3
function averageAge(arr) {
  const somaDifIdades = arr.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0);
  const quantidadeLivros = books.length;
  return somaDifIdades / quantidadeLivros;
}
//console.log(averageAge(books));

// requisito 4
// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

// function longestNamedBook(arr) {
//   return arr.sort((a,b) => b.name.length - a.name.length)[0];
// }
// console.log(longestNamedBook(books));

function longestNamedBook(arr) {
  return arr.reduce((acc, curr) => (acc.name.length > curr.name.length) ? acc : curr);
}
// console.log(longestNamedBook(books));

// requisito 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arr) {
  return arr.reduce((acc, curr) => acc + curr.split('').reduce((acumulador, letra) => {
    if (letra === 'a' || letra === 'A') {
      return acumulador + 1;
    }
    return acumulador
  }, 0), 0);
}

//console.log(containsA(names));
// requisito 6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(estudantes, notas) {
  // escreva seu código aqui
  return estudantes.map((estudante, index) => ({
    name: estudante, 
    average: notas[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
  }
  ));
}
console.log(studentAverage(students, grades));
// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];