const readline = require('readline-sync');

const bmi = () => {

    const weight = readline.questionInt('What is your body weight? (kg) ');
    const height = readline.questionInt('What is your height? (cm) ');

    const result = weight / (height ^ 2);

    return console.log(result.toFixed(2));
}

bmi();