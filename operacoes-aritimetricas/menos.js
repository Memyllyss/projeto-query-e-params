// subtracao de numeros

function subtrair(numero1, numero2) {
    let resultado = numero1 - numero2;

    return {
        numero1: numero1,
        numero2: numero2,
        operacao: "subtraindo",
        resultado: resultado
    };
}

export { subtrair };
