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
