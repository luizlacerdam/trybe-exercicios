// Objct
// requisito 1
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'mamao', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'acai', 'granola'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

//console.log(fruitSalad(specialFruit, additionalItens));

// requisito 2
const user = {
  fname: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const bothObj = {...user, ...jobInfos};
// console.log(bothObj);
const {
  fname,
  age,
  nationality,
  profession,
  squad,
  squadInitials,
} = bothObj;
//console.log(`Hi, my name is ${fname}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

////////////////
// Array////////
////////////////

// requisito 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

//saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [ola, saudacao] = saudacoes;
//saudacao(ola);

// requisito 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

//console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida);
