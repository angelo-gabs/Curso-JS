const verdadeira = true;

// let tem escopo de bloco 
// var só tem escopo de função 
let nome = 'Angelo'; // criando variavel 
var nome2 = 'Angelo';// var eu sempre vou redeclarar

if(verdadeira) {
    let nome = 'Gabriel' // aqui estamos criando uma nova váriavel e não redeclarando 
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'outra coisa'; 
        var nome2 = 'ronaldo' //redeclarando
        console.log(nome2, nome);
    }
 }
 console.log(nome, nome2); // o primeiro se manteve mas o segundo foi redeclarado.

 