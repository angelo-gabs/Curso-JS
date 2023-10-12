const nome  = ['Angelo ', 'Gabriel', 'Costa'];

for (let valor of nome) { // NÃO da para usar for of em objetos
    console.log(valor) // ao invês de aparecer o indice, vem o valor
}

// For clássico - geralmente com iteráveis(array ou string)
// For in - retorna o índice ou chave (String, array ou objetos)
// For of - retorna o valor em si (arrays ou strings)
