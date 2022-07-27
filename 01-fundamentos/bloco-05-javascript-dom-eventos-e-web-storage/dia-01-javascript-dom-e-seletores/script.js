document.getElementById('header-container').style.backgroundColor = 'green';
let emergencyTasks = document.getElementsByClassName('emergency-tasks');
for (let i = 0; i < emergencyTasks.length; i += 1) {
    emergencyTasks[i].style.backgroundColor = 'orange';
}