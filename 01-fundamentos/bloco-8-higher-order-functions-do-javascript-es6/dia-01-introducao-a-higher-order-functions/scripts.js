// exercicio 1
const newEmployees = () => {
  const employees = {
    id1: objeto('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: objeto('Luiz Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: objeto('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const objeto = (nome) => {
  let nomeSplit = nome.toLowerCase().split(' ');
  let novoNome;
  for (let i = 0; i < nomeSplit.length; i += 1) {
    if (i === 0) {
      novoNome = nomeSplit[i];
    } else {
      novoNome += '_' + nomeSplit[i];
    }
  }
  let obj = {
    name: nome,
    email: `${novoNome}@trybe.com`,
  }
  return obj;
}

console.log(newEmployees());