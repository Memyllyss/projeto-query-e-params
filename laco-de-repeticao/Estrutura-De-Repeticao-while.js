// calculando quantos anos levara para Joao ficar mais alto que Pedro usando o while

function calcularAnosParaUltrapassar(altura1,altura2,crescimentoAnual1,crescimentoAnual2) {

    let anos = 0;
    let alturaInicial1=altura1;
    let alturaInicial2=altura2;

    if (crescimentoAnual1<=crescimentoAnual2){
        return{
        mensagem:"Fulano 1 nunca ultrapassara fulano 2 nuncaa"

    };
    
}

    while (altura1 <= altura2) {
        altura1 += crescimentoAnual1;
        altura2 += crescimentoAnual2;
        anos++;
    }

    return {
        alturaInicial1,
        alturaInicial2,
        anos,
        mensagem: `fulana1 ficará mais alto que fulano2 em ${anos} anos.`
    };
}

export { calcularAnosParaUltrapassar };
