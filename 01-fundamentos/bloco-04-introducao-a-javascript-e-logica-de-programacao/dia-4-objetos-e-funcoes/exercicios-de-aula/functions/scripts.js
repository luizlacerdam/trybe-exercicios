//Exercicio 1
const a = 2;
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
function isTriangulo(num1, num2, num3) {
    if (num1 < 0 || num2 < 0 || num3 < 0) {
        return false;
    } else if (num1 + num2 + num3 == 180) {
        return true;
    } else {
        return false;
    }
}

console.log(isTriangulo(a,b,c));