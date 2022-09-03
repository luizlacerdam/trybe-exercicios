// Exercicio 1

// Exercicio 2
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
    pares = [];

    for (let i = 0; i < vector.length; i += 1) {
        for (let n = 0; n < vector[i].length; n += 1) {
            if (vector[i][n] % 2 == 0) {
                pares.push(vector[i][n]);
            }
        }
    }
    return pares;
}

console.log(arrayOfNumbers(vector));