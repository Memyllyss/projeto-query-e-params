//maior

function verificarMaioridade(idade) {
    return {
        idade: idade,
        resultado: idade > 17 ? "Maior de idade" : "Menor de idade"
    };
}

export { verificarMaioridade };


//Menor

function comparacao(a, b) {
    return {
        a: a,
        b: b,
        resultado: a < b
    };
}

export { comparacao };

// Maior ou igual

function verificarIdoso(idade) {
    return {
        idade: idade,
        resultado: idade >= 60 ? "Idoso" : "Não idoso"
    };
}

export { verificarIdoso };


//Menor ou igual

function verificarNovinho(idade) {
    return {
        idade: idade,
        resultado: idade <= 18 ? "Novinho" : "Não é novinho"
    };
}

export { verificarNovinho };


//igual

function compararIgualdade(val1, val2) {
    return {
        valor1: val1,
        valor2: val2,
        "== (igualdade abstrata)": val1 == val2,
        "=== (igualdade estrita)": val1 === val2
    };
}

export { compararIgualdade };


//diferente

function verificarDiferente(val1, val2) {
    return {
        valor1: val1,
        valor2: val2,
        "!= (diferença abstrata)": val1 != val2,
        "!== (diferença estrita)": val1 !== val2
    };
}

export { verificarDiferente };
