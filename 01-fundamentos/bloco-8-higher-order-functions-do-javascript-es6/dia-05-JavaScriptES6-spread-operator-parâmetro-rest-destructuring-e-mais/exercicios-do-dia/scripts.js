// requisito 1
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'mamao', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'acai', 'granola'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

//console.log(fruitSalad(specialFruit, additionalItens));

// requisito 2
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const bothObj = {...user, ...jobInfos};
console.log(bothObj);