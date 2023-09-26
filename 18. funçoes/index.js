function saudacao(nome) {
//console.log(`Bom dia! ${nome}`);
return `Bom dia! ${nome}`;
}

//saudacao('Angelo');
const variavel = saudacao('Angelo');
console.log(variavel);


//                                    //

function soma(x = 1, y = 1) { // esses valores colocados são para caso a "some()" fique em branco, eles assumiram esse valores
    const resultado = x + y
    return resultado
}
//console.log(soma(2, 2));
const resultado = soma(4);
console.log(resultado);


//                                  //
const raiz = function (n){
    return n ** 0.5;
}

console.log(raiz(9));

//                                 //

const raizz = n => n ** 0.5;

console.log(raizz(9));