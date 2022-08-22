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
// requisito 1
// Adicione o código do exercício aqui:
function authorBornIn1947(array) {
  // escreva aqui o seu código
  return array.find((livro) => livro.author.birthYear === 1947).author.name;
}
//console.log(authorBornIn1947(books));

// requisito 2
function smallerName(array) {
  let nameBook = '';
  // escreva aqui o seu código
  array.forEach(element => {
    if (element.name.length > nameBook.length) {
      nameBook = element.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
//console.log(smallerName(books));

// requisito 3
function getNamedBook(array) {
  // escreva seu código aqui
  return array.find((element) => element.name.length === 26);
}
//console.log(getNamedBook(books));

// requisito 4
function booksOrderedByReleaseYearDesc(arr) {
  // escreva aqui seu código
  arr.sort((a, b) => a.releaseYear - b.releaseYear);
}
// booksOrderedByReleaseYearDesc(books);
// console.log(books);

// requisito 5
function everyoneWasBornOnSecXX(arr) {
  // escreva seu código aqui
  return arr.every((element) => element.author.birthYear >= 1900 && element.author.birthYear < 2000);

}
console.log(everyoneWasBornOnSecXX(books));