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
let arrayTest = [2, 4, 6, 7, 10, 0, -3];

function menorValor(array) {
    let menor;

    for (let i = 0; i < array.length; i += 1) {
        if (i == 0) {
            menor = array[i];
        } else {
            if (array[i] < menor) {
                menor = array[i];
            }
        }
        
    }
    return menor;    
}

console.log(menorValor(arrayTest));