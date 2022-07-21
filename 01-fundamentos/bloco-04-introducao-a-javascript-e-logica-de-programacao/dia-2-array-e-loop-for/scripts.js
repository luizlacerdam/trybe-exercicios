let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1
// for (let number of numbers) {
//     console.log(number);
// }

//Exercício 2
// let sum = 0;
// for (let number of numbers) {

//         sum += number;
// }

// console.log(sum);

//Exercício 3
// let sum = 0;
// for (let number of numbers) {
//     sum += number;
// }
// let media = sum / numbers.length;
// console.log(media);

//Exercício 4
// let sum = 0;
// for (let number of numbers) {
//     sum += number;
// }
// let media = sum / numbers.length;
// if (media > 20) {
//     console.log('Valor maior que 20.');
// } else {
//     console.log('Valor menor ou igual a 20.');
// }

//Exercício 5
// let higher;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (i == 0) {
//         higher = numbers[0];
//     } else {
//         if (numbers[i] > higher) {
//             higher = numbers[i];
//         }
//     }
// }
// console.log(higher);

//Exercício 6
// let impares = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 != 0) {
//         impares += 1;
//     }
// }

// if (impares > 0) {
//     console.log(impares);
// } else {
//     console.log('Nenhum valor ímpar encontrado.');
// }

//Exercício 7
let lower;

for (let i = 0; i < numbers.length; i += 1) {
    if (i == 0) {
        lower = numbers[0];
    } else {
        if (numbers[i] < lower) {
            lower = numbers[i];
        }
    }
}
console.log(lower);