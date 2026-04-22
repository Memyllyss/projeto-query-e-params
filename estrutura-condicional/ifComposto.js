// if composto, verificacao de salario

function verificarSalario(salario) {


    if (salario >= 5000) {
        return {
            resultado: "Recebe um bom salário"
        };
    } else {
        return {
            resultado: "Você NÃO recebe um bom salário"
        };
    }
}

export { verificarSalario };
