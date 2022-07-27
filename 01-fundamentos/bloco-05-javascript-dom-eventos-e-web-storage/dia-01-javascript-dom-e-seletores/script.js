//Mudando cor do header
document.getElementById('header-container').style.backgroundColor = 'green';
//Mudando cor das sections
let emergencyTasks = document.getElementsByClassName('emergency-tasks');
for (let i = 0; i < emergencyTasks.length; i += 1) {
    emergencyTasks[i].style.backgroundColor = 'orange';
}
//Mudando cor das sections
let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
for (let i = 0; i < noEmergencyTasks.length; i += 1) {
    noEmergencyTasks[i].style.backgroundColor = 'yellow';
}
//Mudando a cor dos h3
let h3 = document.getElementsByTagName('h3');
//Mudando a cor dos primeiros dois h3
for (let i = 0; i < 2; i += 1) {
   h3[i].style.backgroundColor = 'purple'; 
}
//Mudando a cor dos ultimos dois h3
for (let i = 2; i < 5; i += 1) {
    h3[i].style.backgroundColor = 'black'; 
 }
