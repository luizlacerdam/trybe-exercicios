//Exercicio 1
let fatorial = 5;
let mult = 1;
// 3*2*1
while (fatorial > 1) {
    mult = fatorial * mult;
    fatorial = fatorial - 1
}
console.log(mult);

//Exercicio 2
let palavra = 'tryber';
let inverso = [];

for (let i = 0; i < palavra.length; i += 1) {
    inverso.unshift(palavra[i])
}
console.log(inverso);

//Exercicio 3.1

let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMaior;

for (let i = 0; i < array.length; i += 1) {
    if (i == 0) {
        palavraMaior = array[i];
    } else {
        if (array[i].length > palavraMaior.length) {
            palavraMaior = array[i];
        }
    }
}

console.log(palavraMaior);

//Execicio 3.2

let palavraMenor;

for (let i = 0; i < array.length; i += 1) {
    if (i == 0) {
        palavraMenor = array[i];
    } else {
        if (array[i].length < palavraMenor.length) {
            palavraMenor = array[i];
        }
    }
}

console.log(palavraMenor);


