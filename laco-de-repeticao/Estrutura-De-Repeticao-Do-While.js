// calculo de expoente com o do while

function calcularPotencia(base, expoente) {

    
    let resultado = 1;
    let i = 0;

    do {
        resultado = resultado * base;
        i++;
    } while (i < expoente);

    return {
        base: base,
        expoente: expoente,
        resultado: resultado
    };
}

export { calcularPotencia };