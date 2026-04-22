// multiplicacao dos numeros de um vetor utilizndo o map

function multiplicarVetor(num) {

    

    let novoNum = num.map(n => n * 10);

    return {
        vetorOriginal: num,
        vetorMultiplicadoPor10: novoNum
    };
}

export { multiplicarVetor };



