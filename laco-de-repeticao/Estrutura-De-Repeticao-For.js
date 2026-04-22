// gerar tabuada que o usuario escolher

function gerarTabuada(numero) {

    let tabuada = [];

    for (let i = 1; i <= 10; i++) {
        tabuada.push (`${numero} x ${i} = ${numero*i}`)
}

return {
    tabuadaDeNumero:numero,
    resultado:tabuada
};
}

export { gerarTabuada };


