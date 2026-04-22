//soma de numeros

function somar(numero1, numero2) {
    let resultado = numero1 + numero2;

    return {
        numero1: numero1,
        numero2: numero2,
        operacao: "somando",
        resultado: resultado
    };
}

export { somar };
