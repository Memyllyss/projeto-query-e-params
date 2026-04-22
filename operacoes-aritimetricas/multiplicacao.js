// multiplicacao de numeros

function multiplicar(numero1, numero2) {
    let resultado = numero1 * numero2;

    return {
        numero1: numero1,
        numero2: numero2,
        operacao: "multiplicando",
        resultado: resultado
    };
}

export { multiplicar };
