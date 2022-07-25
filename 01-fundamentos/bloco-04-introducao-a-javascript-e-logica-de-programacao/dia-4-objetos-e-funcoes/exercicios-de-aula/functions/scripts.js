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
// function umImpar(num1,num2,num3) {
//     if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(umImpar(a,b,c));

//Exercicio 10
// const valorC = 100;
// const valorV = 200;
// let impostoA = 1.2;

// function custoDoProduto(valorCusto,valorVenda,imposto) {

// if (valorCusto < 0 || valorVenda < 0) {
//     return 'Custo ou venda negativos.';
// }

// let valorCustoTotal = valorCusto * imposto;
// let lucro = valorVenda - valorCustoTotal;

// return lucro;
// }

// console.log(custoDoProduto(valorC,valorV, impostoA));

//Exercicio 11
let salario = 3000.00;

function calculoSalario(salarioBruto) {
let inssAliquota;
let inssMaxAliquota;
let irAliquota;
let irParcela;


//INSS
if (salarioBruto <= 1556.94) {
    inssAliquota = 8;
    inssMaxAliquota = 0;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inssAliquota = 9;
    inssMaxAliquota = 0;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inssAliquota = 11;
    inssMaxAliquota = 0;
} else if (salarioBruto > 5189.82) {
    inssAliquota = 0;
    inssMaxAliquota = 570.88;
}

let salarioInssDeduzido = (salarioBruto * ((100 - inssAliquota)/100)) - inssMaxAliquota;

// console.log(salarioInssDeduzido);

//IR
if (salarioInssDeduzido <= 1903.98) {
    irAliquota = 0;
    irParcela = 0;
} else if (salarioInssDeduzido >= 1903.99 && salarioInssDeduzido <= 2826.65) {
    irAliquota = 7.5;
    irParcela = 142.8;
} else if (salarioInssDeduzido >= 2826.66 && salarioInssDeduzido <= 3751.05) {
    irAliquota = 15;
    irParcela = 354.8;
} else if (salarioInssDeduzido >= 3751.06 && salarioInssDeduzido <= 4664.68) {
    irAliquota = 22.5;
    irParcela = 636.13;
} else if (salarioInssDeduzido > 4664.68) {
    irAliquota = 27.5;
    irParcela = 869.36;
}

let valorIr = (salarioInssDeduzido * (irAliquota / 100)) - irParcela;

let salarioLiquido = salarioInssDeduzido - valorIr;

return salarioLiquido;
}

console.log(calculoSalario(salario));