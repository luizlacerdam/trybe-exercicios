1. Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
3. Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
``
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
``
6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
7. Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:
``
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
``
8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

``
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
``