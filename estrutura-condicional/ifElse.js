// verificacao de salario com o if else


function verificarSalario2(salarioPessoa) {

    let salarioMinimo = 1621.00;

    if (salarioPessoa > salarioMinimo) {
        let diferenca = salarioPessoa - salarioMinimo;

        return {
            salarioMinimo: salarioMinimo,
            salarioPessoa: salarioPessoa,
            resultado: `A pessoa recebe R$ ${diferenca} a MAIS que o salário mínimo.`
        };

    } else if (salarioPessoa < salarioMinimo) {
        let diferenca = salarioMinimo - salarioPessoa;

        return {
            salarioMinimo: salarioMinimo,
            salarioPessoa: salarioPessoa,
            resultado: `A pessoa recebe R$ ${diferenca} a MENOS que o salário mínimo.`
        };

    } else {
        return {
            salarioMinimo: salarioMinimo,
            salarioPessoa: salarioPessoa,
            resultado: "A pessoa recebe exatamente o valor do salário mínimo."
        };
    }
}

export { verificarSalario2 };
