// adicao de um elemento no fim utilizando o push

function adicionarNoFim(nomes, novoNome) {
    let lista = [...nomes];
    lista.push(novoNome);
    return { nomes: lista };
}

export { adicionarNoFim };

// adicao de elemento no inicio utilizando o unshift

function adicionarNoInicio(nomes, novoNome) {
    let lista = [...nomes];
    lista.unshift(novoNome);
    return { nomes: lista };
}

export { adicionarNoInicio };
