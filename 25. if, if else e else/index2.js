const  numero = 10;
//NOTA: Somente uma condição no bloco "if" poderá ser verdadeira 
//Exemplo:
if (numero >= 0 && numero <= 6) {
    console.log('O numero está entre 0 e 5'); 
} else if (1 === 1) {
    console.log('Literal'); // isso é verdadeiro portanto somente ele será executado mesmo tendo outro atributo verdadeiro no código 
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8'); // verdadeiro 
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11'); 
} else {
    console.log('O número não está entre 0 e 11');
} // 
