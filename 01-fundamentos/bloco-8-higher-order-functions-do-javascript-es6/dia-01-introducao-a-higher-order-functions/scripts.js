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

// exercicio 2
const numberChecker = (aposta, numeroSorteado) => aposta === numeroSorteado;
const sorteio = (aposta, callback) => {
 const numeroSorteado = Math.floor(Math.random() * 5) + 1;
 return callback(aposta, numeroSorteado)?'Parabéns, você ganhou!' : 'Tente outra vez..';
}

console.log(sorteio(3,numberChecker));

// exercicio 3
const prova = (gabarito, respostas, callback) => {
callback(gabarito,respostas);
}
const correcao = (gabarito, respostas) => {
  let pontos = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    (respostas[i] === gabarito[i])?pontos += 1 : (respostas[i] === 'N.A')?pontos -= 0.5 : pontos = pontos;
  }
  return pontos;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

