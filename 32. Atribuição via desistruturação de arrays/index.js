/*
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/

//... rest,    ... spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, ,terceiroNumero, ...resto] = numeros; // vai seguir a ordem da array
console.log(primeiroNumero, terceiroNumero);
console.log(resto);

//                0          1          2
//             0  1  2    0  1  2    0  1  2  
const num = [ [1, 2 ,3], [4, 5, 6], [7, 8 ,9]];
//console.log(num[1][2]);
const [list1, lista2, lista3] = num 
console.log(lista3[2]);