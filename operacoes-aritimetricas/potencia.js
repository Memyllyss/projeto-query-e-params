// calculo de potencia

function calcularPotencia(base, expoente) {
    let resultado = base ** expoente;

    return {
        base: base,
        expoente: expoente,
        operacao: "potência",
        resultado: resultado
    };
}

export { calcularPotencia };
