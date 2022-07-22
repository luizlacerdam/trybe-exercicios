//Exercicio 1
let fatorial = 3;
let sum = 0;
let array = [];

for (let i = fatorial; i > 0; i--) {
    array.push(i);
}

for (let i = 0; i < array.length; i++) {
    if (i == array.length - 1) {
        sum += array[i];
    } else {
        sum += (array[i] * array[i + 1]);
    }
    
}
console.log(sum);