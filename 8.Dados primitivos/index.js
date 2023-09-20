const nome = 'Angelo'; //String
const numero = 10; //Number
let nomeAluno; // undefined =  não aponta pra local nenhumana  na memória
const sobrenomeAluno = null; // Nulo = quando quer desconfigurar o valor (também não aponta pra local nenhum na memória)
const aprovado = true; //or false (Boolean)

console.log(typeof numero, numero);

//comportamento//

let a = 2;
let b = a;
console.log(a, b);

a = 3; //somente esse valor é alterado mas o "b" se mantem 
console.log(a,b);