
const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    const semanas = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return semanas[diaSemana];
    
    /* let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
    
    }
    return diaSemanaTexto; */
}

function getMesTexto(diaMes) {
    const meses = ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[diaMes];
    /*let mesNome;

    switch (diaMes) {
        case 0:
            mesNome = 'Janeiro';
            return mesNome;
        case 1:
            mesNome = 'Fevereiro';
            return mesNome;
        case 2:
            mesNome = 'Março';
            return mesNome;
        case 3:
            mesNome = 'Abril';
            return mesNome;
        case 4:
            mesNome = 'Maio';
            return mesNome;
        case 5:
            mesNome = 'Junho';
            return mesNome;
        case 6:
            mesNome = 'Julho';
            return mesNome;
        case 7:
            mesNome = 'Agosto';
            return mesNome;
        case 8:
            mesNome = 'Setembro';
            return mesNome;
        case 9:
            mesNome = 'Outubro';
            return mesNome;
        case 10:
            mesNome = 'Novembro';
            return mesNome;
        case 11:
            mesNome = 'Dezembro';
            return mesNome;
        
    }
    return mesNome;
    */
}
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}` 
}

function criaData(data) {
    const diaSemana = data.getDay();
    const diaMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getMesTexto(diaMes);

    return (
        `${nomeDia}, ${data.getDate()}  de  ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
} 

h1.innerHTML = criaData(data);


/*
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'  });
*/