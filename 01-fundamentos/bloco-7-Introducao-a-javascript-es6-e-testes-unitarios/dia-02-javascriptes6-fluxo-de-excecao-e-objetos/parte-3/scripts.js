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

// requisito 2
function listarChaves(objeto) {
  return Object.keys(objeto);
}
listarChaves(lesson2);

// requisito 3
function tamanhoObjeto(objeto) {
  return Object.keys(objeto).length;
}
tamanhoObjeto(lesson1);

// requisito 4
function listaValores(objeto) {
  return Object.values(objeto);
}
listaValores(lesson3);
