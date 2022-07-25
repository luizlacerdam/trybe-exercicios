//Exercicio 1
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let name in names) {
    console.log('Olá ' + names[name]);
}

//Exercicio 2
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let i in car) {
    console.log(i,car[i]);
}