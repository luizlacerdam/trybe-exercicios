//Exercicio 1
const a = 3;
const b = 5;
const c = 300;

// function add(num1, num2) {
//     return num1 + num2;
// }

// function sub(num1, num2) {
//     return num1 - num2;
// }

// function mult(num1, num2) {
//     return num1 * num2;
// }

// function div(num1, num2) {
//     return num1 / num2;
// }

// function mod(num1, num2) {
//     return num1 % num2;
// }
// console.log(add(a,b));
// console.log(sub(a,b));
// console.log(mult(a,b));
// console.log(div(a,b));
// console.log(mod(a,b));

//Exercicio 2
// function maiorDeDois(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else if (num2 > num1) {
//         return num2;
//     } else {
//         return null;
//     }
// }

// console.log(maiorDeDois(a,b));

//Exercicio 3
// function maiorDeTres(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     } else if (num2 > num1 && num2 > num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }

// console.log(maiorDeTres(a,b,c));

//Exercicio 4
// function whatBolean(num1) {
//     if (num1 > 0) {
//         return 'positive';
//     } else if (num1 < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }

// console.log(whatBolean(a));

//Exercicio 5
// function isTriangulo(num1, num2, num3) {
//     if (num1 < 0 || num2 < 0 || num3 < 0) {
//         return false;
//     } else if (num1 + num2 + num3 == 180) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isTriangulo(a,b,c));

//Exercicio 6
// let peca = 'bispo';

// function chess(lowerPeca) {
// lowerPeca = peca.toLowerCase()

// switch (lowerPeca) {
//     case 'peao':
//         return 'casa pra frente';
//     case 'cavalo':
//         return 'movimenta-se em L';
//     case 'torre':
//         return 'movimenta-se em linha reta';
//     case 'dama':
//         return 'movimenta-se em qualquer direção';
//     case 'rei':
//         return 'movimenta-se em qualquer direção uma casa';
//     case 'bispo':
//         return 'diagonais'; 
// }
// }

// console.log(chess(peca));

//Exercicio 7
// let n1 = 100;

// function porcent(nota) {  

// if (nota >= 90 && nota <= 100) {
//     return 'A';
// } else if (nota >= 80 && nota < 90) {
//     return 'B';
// } else if (nota >= 70 && nota < 80) {
//     return 'C';
// } else if (nota >= 60 && nota < 70 ) {
//     return 'D';
// } else if (nota >= 50 && nota < 60) {
//     return 'E';
// } else if (nota < 50 && nota >= 0) {
//     return 'F'
// } else {
//     return ('Error');
// }
// }

// console.log(porcent(n1));

//Exercicio 8
// function umPar(num1, num2, num3) {
//     if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(umPar(a,b,c));

//Exercicio 9
function umImpar(num1,num2,num3) {
    if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

console.log(umImpar(a,b,c));