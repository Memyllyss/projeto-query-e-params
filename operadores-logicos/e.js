// controle de acesso utilizando o operador && ou E

function verificarAcessoE(temIdade, temAutorizacao) {
    return {
        temIdade: temIdade,
        temAutorizacao: temAutorizacao,
        acesso: temIdade && temAutorizacao ? "Permitido" : "Negado"
    };
}

export { verificarAcessoE };
