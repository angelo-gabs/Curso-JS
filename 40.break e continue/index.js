const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let num of numeros) {
    if (num === 2) { // vai continuar o laço sem exibir o 2
        console.log('Pulei o número 2') // vai ser exibido onde ficava o dois
        continue
    }

    console.log(num)

    if (num === 7) { // no momento que ele encontrar 7 ele para de executar o laço
        break 
    }
}