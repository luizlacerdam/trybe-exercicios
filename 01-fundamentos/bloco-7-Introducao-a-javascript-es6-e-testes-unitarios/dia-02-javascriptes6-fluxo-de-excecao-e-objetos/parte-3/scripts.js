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

// // requisito 1
// function adicionaTurno(objeto, chave, valor) {
//   objeto[chave] = valor
// }
// adicionaTurno(lesson2,'turno','noite');

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
// const allLessons = {lesson1, lesson2, lesson3}

// console.log(allLessons);

// requisito 6

// function soma(classe1, classe2, classe3) {
//   return classe1.numeroEstudantes + classe2.numeroEstudantes + classe3.numeroEstudantes;

// }

// console.log(soma(lesson1, lesson2, lesson3))

// requisito 7

// function keyValue(lesson, index) {
//   let arrayOf = Object.values(lesson);
//   return arrayOf[index];
// }

// console.log(keyValue(lesson1,0));

// requisito 8
function verifyPair(lesson, chave, valor) {
  const arr = Object.entries(lesson);
  let isEqual = false;

  for (let index in arr) {
    if (arr[index][0] === chave && arr[index][1] === valor) {
      isEqual = true
    }
  }
  return isEqual;
}
console.log(verifyPair(lesson3,'turno','noite'));

