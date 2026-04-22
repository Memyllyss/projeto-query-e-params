// Remocao do ultimo elemento utilizando o pop

function removerDoFim(nomes) {
    let lista = [...nomes];
    let removido = lista.pop();
    return { nomes: lista, removido };
}

export { removerDoFim };


// removendo o primeiro elemento utilizando o shift

function removerDoInicio(nomes) {
    let lista = [...nomes];
    let removido = lista.shift();
    return { nomes: lista, removido };
}

export { removerDoInicio };
