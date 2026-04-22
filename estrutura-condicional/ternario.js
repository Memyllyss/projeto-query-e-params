// classificacao de salario com o ternario

function classificacaoSalario4(salario) {


    let classificacao = salario >= 5000
        ? "Recebe um bom salário" : "Não recebe um bom salário";

    return {
        salario: salario,
        resultado: classificacao
    };
}

export { classificacaoSalario4 };