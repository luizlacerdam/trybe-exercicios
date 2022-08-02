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
const dias = document.getElementById('days');
function criarCalendario(array) {
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
  });
}
holidayColor();

//Exercicio 4
let sextaFeira = 'Sexta-feira';
function criarFridayButton(string) {
  let fridayButt = document.createElement('button');
  fridayButt.innerText = string;
  fridayButt.id = 'btn-friday';
  divButtonsContainer.appendChild(fridayButt);
}
criarFridayButton(sextaFeira);

//Exercicio 5
function fridayChange() {
  const fridayButton = document.getElementById('btn-friday');
  fridayButton.addEventListener('click', function () {
    let listas = document.getElementsByClassName('day');
    for (let i = 0; i < listas.length; i += 1) {
      if (listas[i].classList[1] == 'friday' || listas[i].classList[2] == 'friday' ) {
        if (listas[i].innerText != 'Sextoou') {
          listas[i].innerText = 'Sextoou';
        } else {
          listas[i].innerText = i - 1;
        }
      }
    }
  });
}
fridayChange();

//Exercicio 6
function zoom() {
  dias.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '25px';
  });
  dias.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
  });
}
zoom();

//Exercicio 7
const myTasks = document.getElementsByClassName('my-tasks')[0];
function addTask(string) {
  let novaSpan = document.createElement('span');
  novaSpan.innerText = string;
  myTasks.appendChild(novaSpan);
}
addTask('Cozinhar');
//Exercicio 8
function addDiv(string) {
  let criarDiv = document.createElement('div');
  criarDiv.classList.add('task');
  criarDiv.style.backgroundColor = string;
  myTasks.appendChild(criarDiv);
}
addDiv('green')

//Exercicio 9
const corDiv = document.getElementsByClassName('task')[0];
function classChange() {
  corDiv.addEventListener('click', function (event) {
    if (event.target.classList[1] == 'selected') {
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected');
    }

  });
}
classChange();

//Exercicio 10
const dia = document.getElementsByClassName('day');
function atribuirCor() {
  dias.addEventListener('click', function (event) {
    if (event.target.style.backgroundColor == corDiv.style.backgroundColor && event.target.classList[0] == 'day') {
      event.target.style.backgroundColor = 'rgb(238,238,238)';
    } else 
    {
      if (event.target.classList[0] == 'day' && corDiv.classList[1] == 'selected') {
        event.target.style.backgroundColor = corDiv.style.backgroundColor;
      }  
    }
  });
}
atribuirCor();

//bonus
const butaoAddTask = document.getElementById('btn-add');
const inputTask = document.getElementById('task-input');
const listaTask = document.getElementsByClassName('task-list')[0];
function criaTask() {
  butaoAddTask.addEventListener('click', function () {
    if (inputTask.value == '') {
      window.alert('Escreva seu compromisso!!!')
    } else {
    let novaTask = document.createElement('li');
    novaTask.innerText = inputTask.value;
    listaTask.appendChild(novaTask);
    return novaTask;
    }
    
  });

  inputTask.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
    if (inputTask.value == '') {
      window.alert('Escreva seu compromisso!!!')
    } else {
    let novaTask = document.createElement('li');
    novaTask.innerText = inputTask.value;
    listaTask.appendChild(novaTask);
    }}
  });
}
criaTask();