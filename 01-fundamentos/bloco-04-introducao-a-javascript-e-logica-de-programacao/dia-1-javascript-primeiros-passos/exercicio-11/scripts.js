let salarioBruto = 3000.00;
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

// console.log(valorIr);

let salarioLiquido = salarioInssDeduzido - valorIr;

console.log(salarioLiquido);