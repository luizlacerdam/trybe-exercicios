// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  email.forEach(element => {
    console.log(`O email ${element} esta cadastrado em nosso banco de dados!`);
  });
  
};

showEmailList(emailListInData);
