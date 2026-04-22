// validacao de acesso utilizando o || ou OU

function verificarAcessoOu(temIdade, temAutorizacao) {
    return {
        temIdade: temIdade,
        temAutorizacao: temAutorizacao,
        acesso: temIdade || temAutorizacao ? "Permitido" : "Negado"
    };
}

export { verificarAcessoOu };
