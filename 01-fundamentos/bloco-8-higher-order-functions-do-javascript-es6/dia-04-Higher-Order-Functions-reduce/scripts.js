// requisito 1
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) { 
  return arr.reduce((acc, curr) => acc.concat(curr));
}
console.log(flatten(arrays));