/*
const nome01 = 'Angelo';
const sobrenome01 = 'Silveira';
const idade01 = '18';

const nome02 = 'Fulano';
const sobrenome02 = 'Siclano';
const idade02 = '18'; 

vamo supor que eu estou tentando fazer uma lista de nomes, ao invés de eu fazer um por um 
é possível fazer de outra maneira

/*
const pessoa1 = {
  nome: 'Angelo',
  sobrenome: 'Silveira',
  idade: 18
};   

console.log(pessoa1.nome);
console.log(pessoa1.idade);
apesar de ser mais pratico ainda vai ser muito trabalhoso, sendo assim, eu posso criar uma função para fazer isso
*/

function criaPessoa(nome, sobrenome, idade){ // parametro
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade

    };
}

const pessoa1 = criaPessoa('Angelo', 'Silveira', 18); //argumento 
const pessoa2 = criaPessoa('Fulano', 'Siclano', 18);  
const pessoa3 = criaPessoa('Jorge', 'Phantom', 96); 

console.log(pessoa1.nome, pessoa3.nome, pessoa2.idade);