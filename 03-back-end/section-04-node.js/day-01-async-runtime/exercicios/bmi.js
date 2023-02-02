const readline = require('readline-sync');

const bmi = () => {

    const weight = readline.questionInt('What is your body weight?');
    const height = readline.questionInt('What is your height?');

    const result = weight / (height ^ 2);

    return console.log(result);
}

bmi();