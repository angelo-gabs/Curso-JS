const frutas = ['Maça', 'Banana', 'Uva'];

/*
for(let i = 0; i < frutas.length; i++) {// aqui nós criamos um contador dando o valor 0 para a variável i
    console.log(frutas[i])
}
*/


for (let i in frutas) { // enquanto aqui ele lê os indices ou chaves do objeto 
    console.log(i, frutas[i])
}

const pessoa = {
    nome: 'Angelo',
    idade: 18,
    altura: 1.80
}

// posso acessar o valor de uma objeto desses dois jeitos 
//console.log(pessoa.nome); 
//console.log(pessoa['nome']);

for(let key in pessoa) {
    console.log(key, pessoa[key])
}