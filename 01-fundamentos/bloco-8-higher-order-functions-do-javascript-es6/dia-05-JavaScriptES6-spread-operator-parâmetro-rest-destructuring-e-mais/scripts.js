// requisito 1
// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
// });

// requisito 2
const sum = ((...numeros) => numeros.reduce((acc, curr) => acc + curr,0));
//console.log(sum(4, 5, 6));

// requsito 3
// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade -->
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo

const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// <nome> tem <anos de idade> e gosta de <gostos da pessoa> -->

// Retornos esperados: -->
// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// requsito 4

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];
// bornIn: nascido em

// escreva filterPeople abaixo

const filterPeople = (arr) => arr.filter((element) => element.bornIn < 2000 && element.nationality === 'Australian');
//console.log(filterPeople(people));

// requisito 5
const myList = [5, 2, 3];
const swap = ([a, b, c]) => [c, b, a];
//console.log(swap(myList)); 

// requisito 6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([marca, modelo, ano]) => ({
  marca,
  modelo,
  ano,
});
//console.log(toObject(palio));

// requsito 7
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];
// measurementUnit: unidade de medida

const shipLength = (arr) => `${arr.name} is ${arr.length} ${arr.measurementUnit} long` 
// escreva shipLength abaixo
// retorno esperado
console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])) // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])) // 'Yamato is 256 meters long'