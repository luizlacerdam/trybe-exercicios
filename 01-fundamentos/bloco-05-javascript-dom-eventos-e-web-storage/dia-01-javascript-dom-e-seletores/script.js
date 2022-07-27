document.getElementById('header-container').style.backgroundColor = 'green';
let emergencyTasks = document.getElementsByClassName('emergency-tasks');
for (let i = 0; i < emergencyTasks.length; i += 1) {
    emergencyTasks[i].style.backgroundColor = 'orange';
}

let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
for (let i = 0; i < noEmergencyTasks.length; i += 1) {
    noEmergencyTasks[i].style.backgroundColor = 'yellow';
}