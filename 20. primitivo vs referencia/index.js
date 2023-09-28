/*
Primitivos (imutáveis) - string, number, boolean, undefined, null

Referência (mutável) - array, object, function
*/

let nome = 'Angelo';
nome[0] = 'R'; // não consigo fazer isso pois é imutável
console.log(nome[0]);

//Imutáveis //
let a = 'A'
let b = a; //cópia
console.log(a, b);

a = 'outra coisa'; // alterei o valor de A mas o valor de b permanece 
console.log(a, b);

//mutáveis//

let a1 = [1, 2, 3];
let b1 = a1; //não copia e sim passa por referencia /  vai apontar para o mesmo lugar na memória que A
console.log(a1, b1); 

a1.push(4);
console.log(a1, b1); //b também é afetado aqui  

b1.pop();
console.log(a1, b1);
