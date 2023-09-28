/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

false : literal 

*Falsy
0
'' (string vazia)
null / undefined
NaN
*/
console.log('Luiz' && 0 && 'Maria'); // me retorna o zero pq é falso 
console.log('Fulano' && 'Ciclano'); // me retorna o último pois todos são verdadeiros

console.log(0 || false || null || 'Angelo' || true); // pega o primeiro elemento verdadeiro da esquerda para direita 

//const corUsuario = null; // será exbido preto pois não foi selecionado nada 
const corUsuario = 'Vermelho' // dessa vez será exibido pois uma cor foi selecionada
const corPadrao  = corUsuario || 'preto';

console.log(corPadrao);

function falaOi() {
    return 'oi'
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());
/* 
perceba que o 'vaiExecutar' é falso, então retorna false (já que quando usamos && ele captura o primeiro false) 
mas se 'vaiExecutar' for true, será executado 'falaOi()', pois se ambos forem verdadeiros(na condição &&), será retornado o último elemento
*/




