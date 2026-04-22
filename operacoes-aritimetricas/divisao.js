// divisao de numeros

function dividir(numero1,numero2) {


    let resultado = numero1 / numero2;

    return {
        numero1: numero1,
        numero2: numero2,
        operacao: "divisão",
        resultado: resultado
    };
}

export { dividir };

