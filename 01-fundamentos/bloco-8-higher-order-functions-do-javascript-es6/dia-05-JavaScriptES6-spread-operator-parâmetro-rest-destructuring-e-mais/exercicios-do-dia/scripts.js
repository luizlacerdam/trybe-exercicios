// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'mamao', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'acai', 'granola'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));