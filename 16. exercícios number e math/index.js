let numero = Number(prompt('digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');

numeroTitulo.innerHTML = numero;

texto.innerHTML += `<p>Raiz quadrada é: ${numero ** (1/2)} </p>`;
texto.innerHTML += `<p>É inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;




