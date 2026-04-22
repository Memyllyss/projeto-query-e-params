//acumular o valor de numeros do vetor usando uma variavel acumuladora

function somarVetor(num) {
    let soma = 0;

    for (let i = 0; i < num.length; i++) {
        soma += num[i];
    }

    return {
        vetor: num,
        soma: soma
    };
}

export { somarVetor };
