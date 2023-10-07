const pessoa = {
   nome: 'Angelo',
   sobrenome: 'Costa',
   idade: 18,
   endereco: {
       rua: 'hulha negra',
       numero: 1805
   }
};

const { nome = '', sobrenome, endereco: {rua, numero}} = pessoa  // eu coloquei o = '' para caso eu não tenha valor de nome, apareça nada
console.log(nome, numero);