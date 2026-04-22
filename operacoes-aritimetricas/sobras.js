// calculo de sobras

function verificarParOuImpar(num) {
    return {
        numero: num,
        resultado: num % 2 === 0 ? "Par" : "Ímpar"
    };
}

export { verificarParOuImpar };
