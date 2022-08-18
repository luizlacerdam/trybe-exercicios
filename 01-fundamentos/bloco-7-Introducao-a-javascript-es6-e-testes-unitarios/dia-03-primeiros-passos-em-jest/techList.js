function techList(array,nome) {
  if (array.length == 0) {
    return 'Vazio!';
  }

  let obj = {};
  let arr = [];
  let arraySorted = array.sort(function (a,b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  for (let i = 0; i < array.length; i += 1) {
    obj = {
      tech: arraySorted[i],
      name: nome
    }
    arr.push(obj)
  }
  return arr;
}
console.log(techList(['react', 'php', 'javascript', 'python'], 'ola'));
module.exports = techList;