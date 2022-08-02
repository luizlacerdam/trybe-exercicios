function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//Exercicio 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function criarCalendario(array) {
  const dias = document.getElementById('days');
  for (let i = 0; i < array.length; i += 1) {
    let dia = document.createElement('li');
    dia.classList.add('day');
    dia.innerText = array[i];
    dias.appendChild(dia);
    if (array[i] == 24 || array[i] == 25 || array[i] == 31) {
      dia.classList.add('holiday');
    }
    if (array[i] == 4 || array[i] == 11 || array[i] == 18 || array[i] == 25) {
      dia.classList.add('friday');
    }
  }
}
criarCalendario(decemberDaysList);

//Exercicio 2
const divButtonsContainer = document.getElementsByClassName('buttons-container')[0];
let stringFeriados = 'Feriados';
function criaButton(string) {
  let button = document.createElement('button');
  button.classList.add('btn-holiday');
  button.innerText = string;
  divButtonsContainer.appendChild(button);
}
criaButton(stringFeriados);

//Exercicio 3
function holidayColor() {
  const buttonHoliday = document.getElementsByClassName('btn-holiday')[0];
  buttonHoliday.addEventListener('click', function () {
    let listas = document.getElementsByClassName('day');
    for (let i = 0; i < listas.length; i += 1) {
      if (listas[i].classList[1] == 'holiday') {
        if (listas[i].style.backgroundColor == 'green') {
          listas[i].style.backgroundColor = 'rgb(238,238,238)';
        } else {
          listas[i].style.backgroundColor = 'green';
        }
      }
    }
  })
}
holidayColor();

//Exercicio 4
let sextaFeira = 'Sexta-feira';
function fridayButton(string) {
  let fridayButt = document.createElement('button');
  fridayButt.innerText = string;
  fridayButt.id = 'btn-friday';
  divButtonsContainer.appendChild(fridayButt);
}
fridayButton(sextaFeira);