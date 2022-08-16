const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// requisito 1
function adicionaTurno(objeto, chave, valor) {
  objeto[chave] = valor
}
adicionaTurno(lesson2,'turno','noite');

// // requisito 2
// function listarChaves(objeto) {
//   return Object.keys(objeto);
// }
// listarChaves(lesson2);

// // requisito 3
// function tamanhoObjeto(objeto) {
//   return Object.keys(objeto).length;
// }
// tamanhoObjeto(lesson1);

// // requisito 4
// function listaValores(objeto) {
//   return Object.values(objeto);
// }
// listaValores(lesson3);

// requisito 5
const allLessons = {lesson1, lesson2, lesson3}

console.log(allLessons);

// requisito 6

function soma(classe1, classe2, classe3) {
  return classe1.numeroEstudantes + classe2.numeroEstudantes + classe3.numeroEstudantes;

}

console.log(soma(lesson1, lesson2, lesson3))