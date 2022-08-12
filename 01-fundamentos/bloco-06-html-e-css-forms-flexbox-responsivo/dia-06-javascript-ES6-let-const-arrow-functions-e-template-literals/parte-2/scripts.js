// requisito 1
function factorial(n) {
  let num = [];
  let result = 1;
  for(let i = 1; i <= n; i += 1) {
    num.push(i)
  }
  for (let h = 0; h < num.length; h += 1) {
    result *= num[h];
  }
  return `Esse é o fatorial ${result}.`;
}
console.log(factorial(5));