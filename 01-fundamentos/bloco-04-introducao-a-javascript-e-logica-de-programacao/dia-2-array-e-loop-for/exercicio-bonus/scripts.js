let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] < array[secondIndex]) {
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
// }

// console.log(array);

//Exercicio 2

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] > array[secondIndex]) {
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
// }

// console.log(array);

//Exercicio 3
let mult;
let matrix = []
for (let index = 0; index < array.length; index += 1) {
    
    if (index < array.length) {
        mult = array[index] * 2;
        matrix.push(mult)
    } else {
        mult = array[index] * array[index + 1];
        matrix.push(mult)
    }
        
}

console.log(matrix);
