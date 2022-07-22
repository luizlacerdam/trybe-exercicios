//Exercicio 1

// let sum = 0;

// for (let i = 0; i <= 50; i += 1) {
//     sum += i;
// }

// console.log(sum);

//Exercicio 2 intevalo 2 - 150 sao divisiveis por 3
let count = 0;

for (let i = 2; i <= 150; i += 1) {
    if (i % 3 == 0) {
        count += 1;
    }
}
if (count == 50) {
console.log('Mensagem secreta');;
}
console.log(count)