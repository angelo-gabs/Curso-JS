const pessoa1 = {
    nome: 'Angelo',
    sobrenome: 'Silveira',
    idade: '18',

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

}
pessoa1.fala();
