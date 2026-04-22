// if simples, classificacao de salario

function verificarSalario3(salario) {


    if (salario >= 5000) {
        return {
            resultado: "Recebe um bom salário"
        };

    }

    return {
        resultado:"Nao recebe um bom salario"
    }

}

export { verificarSalario3 };
