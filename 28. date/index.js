// estou usando números para definir a ordem do que eu estou colocando 

/* const tresHoras =  60 * 60 * 3 * 1000; // 3.  fazendo isso eu consigo com que a data fique 1/1/1970
const umDia = 60 * 60 * 24 * 1000; //4. isso foi só para adiciconar um dia e ficar 2/1/1970
const data = new Date(0 + tresHoras + umDia); // 1.   01/ 01/ 1970 
console.log(data.toString()); // 2.   31/12/1969 21:00:00 vai aparecer isso pq o fuso horário é de três horas de difirença
*/

//const data = new Date(2019, 3, 20, 15, 14, 27, 999); //   yyyy/mm/dd/  hh/mm/ss/msms/   deetalhe: Mês é de 0-11 

const data = new Date('2021-05-04 15:28:43');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() +1);
console.log('Ano', data.getFullYear());
console.log('Horas', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log ('Dia semana', data.getDay()); // dia da semana 0 - domingo     6- sábado
console.log(data.toString());
console.log(Date.now());
