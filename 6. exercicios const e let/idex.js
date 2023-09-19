const nome = 'Angelo Gabriel';
const sobrenome = 'Costa Silveira';
const idade = 18;
const peso = 59;
const altura = 1.80; 
let imc;// peso / (altura * altura )
imc = peso / (altura * altura);
let anoNascimento; // 2021 - idade
anoNascimento = 2021 - idade; 
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc );
console.log(nome, 'nasceu em', anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);//da para fazer dessa maneira tambpém(recomendado)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}` );
console.log(`${nome} nasceu em ${anoNascimento}`);
