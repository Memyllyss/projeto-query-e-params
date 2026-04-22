/*Exercicio: Ler um vetor A com N elementos. Separar os elementos pares e ímpares de
A utilizando apenas um vetor extra B. */

function separarParesEImpares(vetor) {
    let pares = vetor.filter(n => n % 2 === 0);
    let impares = vetor.filter(n => n % 2 !== 0);

    return {
        vetor,
        pares,
        impares
    };
}

export { separarParesEImpares };
