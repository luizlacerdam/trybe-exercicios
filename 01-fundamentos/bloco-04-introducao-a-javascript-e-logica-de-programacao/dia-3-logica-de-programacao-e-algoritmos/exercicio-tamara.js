//Exercicio 1

// let sum = 0;

// for (let i = 0; i <= 50; i += 1) {
//     sum += i;
// }

// console.log(sum);

//Exercicio 2 intevalo 2 - 150 sao divisiveis por 3
// let count = 0;

// for (let i = 2; i <= 150; i += 1) {
//     if (i % 3 == 0) {
//         count += 1;
//     }
// }
// if (count == 50) {
// console.log('Mensagem secreta');;
// }
// console.log(count)

//Exercicio 3

let andre = 22;
let joao = 22;
let thiago = 23;

if (andre < joao && andre < thiago) {
    console.log('Andre é o mais novo e tem: ' + andre + ' anos.');
} else if (joao < andre && joao < thiago) {
    console.log('João é o mais novo e tem: ' + joao + ' anos.');
} else if (thiago < andre && thiago < joao) {
    console.log('Thiago é o mais novo e tem: ' + thiago + ' anos.');
} else if (andre == thiago && thiago == joao) {
    console.log('Todos tem a mesma idade que são: ' + andre + ' anos.');
} else if (andre == thiago) {
    console.log('Andre e Thiago são os mais novos e tem a mesma idade: ' + andre + ' anos.');
} else if (thiago == joao) {
    console.log('Thiago e João são os mais novos e tem a mesma idade: '+ joao + ' anos.');
} else {
    console.log('Andre e João são os mais novos e tem a mesma idade: '+ andre + ' anos.');
}
    
