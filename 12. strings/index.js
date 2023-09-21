//                01234567
let umaString =  'um texto um';

console.log(umaString[4]);
console.log(umaString.charAt(6));

console.log(umaString.concat(' em um lindo dia.'));// temos três formas de fazer
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`); // melhor forma

console.log(umaString.indexOf('texto')); // vai indicar em que posição a palavra começa
console.log(umaString.indexOf('u', 3)) // aqui eu estou buscando a letra "u", mas apartir do terceiro indice 
console.log(umaString.lastIndexOf("u")) // assim é de tras para frente

console.log(umaString.replace('um', 'outro'))

let outraString = "o rato roeu a roupa do rei de roma.";

console.log(outraString.replace(/r/, '#')) // só vai alterar a primeira letra r
console.log(outraString.replace(/r/g, '#')) // vai alterar todas 

console.log(outraString.length); // vai definir a quantidade de inidices 

console.log(outraString.slice(2, 6));
console.log(outraString.slice(-5));

console.log(outraString.split(''));  //divir o texto
console.log(outraString.split('', 3)); // o número de vezes que eu quero que faça

console.log(outraString.toUpperCase()); //deixar em maiusculo
console.log(outraString.toLowerCase()); // minusculo 