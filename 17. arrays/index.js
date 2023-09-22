const amigos = ['Gabriel', 'Ronaldo', 'Ramiro'];

//amigos.pop(); // será removido o último indice 
const removido = amigos.pop(); // para armazenar aquele que foi removido
amigos.shift(); // será removido o primeiro indice
console.log(amigos);
console.log(removido);

console.log(amigos instanceof Array); // para descobrir se é uma array 

//amigos.unshift('Milena'); // vai ser adiconado se tornando o indice 0
//amigos.unshift('Guilherme'); // eu coloquei ele depois mas mesmo assim ele será considerado com indice 0

//console.log(amigos);
//console.log(amigos[1]);

//amigos[2] = 'Rebeca'; // aqui eu dei um replace
//amigos[3] = 'Gon'; // aqui eu adicionei ao array mais uma pessoa
//console.log(amigos);

//amigos.push('Ramiro');// aqui eu adicionei alguém
//console.log(amigos.length); //descobrir o tamanho da array

