// requisito 1
const wakeUp = () => 'Acordando!!';

// requisito 2
const breakfast = () => 'Bora tomar café!!';

// requisito 3
const goSleep = () => 'Partiu dormir!!';

// requisito 4
const doingThings = (callback) => console.log(callback());

doingThings(goSleep);