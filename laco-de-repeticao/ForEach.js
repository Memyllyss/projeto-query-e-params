//soma acumulada entre vetores utilizando o for each

function somaAcumuladora(vetorA) {

    
    let vetorB = [];

    let soma = 0;

    vetorA.forEach((valor, i) => {
        soma += valor;
        vetorB[i] = soma;
    });

    return {
        vetorA: vetorA,
        vetorB: vetorB
    };
}

export { somaAcumuladora};