/*
* Aritméticos:
* + adicção/cocatenação
* - subtração
* / divisão
* * multiplicação
* ** potenciação
* % resto da divisão
*/
/*
Presedencia 
()
**
* / %
+ - 
*/ 

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 + num2 * num3);

// operadores de atribuição
let contador = 1;
console.log(++contador); // ++ na frente, vai executar no momento 
console.log(contador++); // ++ após, vai fazer a conta, mas será executado depois 

let conta = 0;
conta += 2; //conta = conta + 2
conta += 2;
console.log(conta);


//NaN - Not a Number
const number1 = 10;
const number2 = 'Angelo';
console.log(number1 * number2);

//posso usar o comando parseint('string com número aqui dentro*'), para converter ele em um número inteiro 
//parseFloat = com casas decimais 
//Number = qualquer um dos dois 



