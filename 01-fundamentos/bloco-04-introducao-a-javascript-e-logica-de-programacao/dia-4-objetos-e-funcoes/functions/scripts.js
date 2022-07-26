//Exercicio 1
// function isPalindromo (string) {
//     let palindromo = false;

//     for (let i = 0; i < (string.length - 1) / 2; i += 1) {
//         if (string[i] == string[string.length - i - 1]) {
//             palindromo = true;
//         } else {
//             palindromo = false;
//         }
//     }
//     return palindromo;
// }

// console.log(isPalindromo('reger'));

// //Exercicio 2
// let arrayTest = [2, 3, 6, 7, 10, 1];

// function maiorValor(array) {
//     let maior;

//     for (let i = 0; i < array.length; i += 1) {
//         if (i == 0) {
//             maior = array[i];
//         } else {
//             if (array[i] > maior) {
//                 maior = array[i];
//             }
//         }
        
//     }
//     return maior;    
// }

// console.log(maiorValor(arrayTest));

//Exercicio 3
// let arrayTest = [2, 4, 6, 7, 10, 0, -3];

// function menorValor(array) {
//     let menor;

//     for (let i = 0; i < array.length; i += 1) {
//         if (i == 0) {
//             menor = array[i];
//         } else {
//             if (array[i] < menor) {
//                 menor = array[i];
//             }
//         }
        
//     }
//     return menor;    
// }

// console.log(menorValor(arrayTest));

//Exercicio 4
// let arrayTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function nomeMaior(array) {
//     let maior;

//     for (let i = 0; i < array.length; i += 1) {
//         if (i == 0) {
//             maior = array[i];
//         } else {
//             if (array[i].length > maior.length) {
//                 maior = array[i];
//             }
//         }
//     }

//    return maior; 
// }

// console.log(nomeMaior(arrayTest));

//Exercicio 5
// let arrayTest = [2, 3, 2, 5, 8, 2, 3, 3, 6, 8, 3, 8, 8, 8, 8];

// function maisSeRepete(array) {
//     let repeticoes = [];
//     let maisSeRepete;
//     for (let i = 0; i < array.length; i += 1) {
//         let serepete = 0;
//         for (let n = i; n < array.length; n += 1) {
//             if (array[i] == array[n]) {
//                 serepete += 1;
//             }
//         }
//         repeticoes.push(serepete);
//     }
    
//     let index;

//     for (let i = 0; i < repeticoes.length; i += 1) {
//         if (i == 0) {
//             index = i;
//         } else {
//             if (repeticoes[i] > repeticoes[i - 1]) {
//                 index = i
//             }
            
//         }
//     }
//     return array[index];
// }

// console.log(maisSeRepete(arrayTest));

//Exercicio 6

let n = 5;

function somatorio(n) {
    if (n < 0) {
        return 'Error! Número menor que zero.';
    }
    
    if (n % 1 !== 0) {
        return 'Error! Número não inteiro.';
    }

    let sum = 0;

    for (let i = 0; i <= n; i+= 1) {
        sum += i
    }
    return sum;
}

console.log(somatorio(n));