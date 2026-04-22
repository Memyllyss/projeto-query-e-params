import express from "express";

import { concatenacao } from "./declaracao-variaveis/Concatenacao-de-String.js";
import { variavelConst } from "./declaracao-variaveis/variavelConst.js";
import { variavelLet } from "./declaracao-variaveis/variavelLet.js";
import { variavelVar } from "./declaracao-variaveis/variavelVar.js";
import { verificarSalario } from "./estrutura-condicional/ifComposto.js";
import { verificarSalario2 } from "./estrutura-condicional/ifElse.js";
import { verificarSalario3 } from "./estrutura-condicional/ifSimples.js";
import { classificacaoNomes } from "./estrutura-condicional/switchCase.js";
import { classificacaoSalario4 } from "./estrutura-condicional/ternario.js";
import { calcularPotencia } from "./laco-de-repeticao/Estrutura-De-Repeticao-Do-While.js";
import { calcularAnosParaUltrapassar } from "./laco-de-repeticao/Estrutura-De-Repeticao-while.js";
import { gerarTabuada } from "./laco-de-repeticao/Estrutura-De-Repeticao-For.js";
import { somaAcumuladora } from "./laco-de-repeticao/ForEach.js";
import { multiplicarVetor } from "./laco-de-repeticao/map.js";
import { dividir } from "./operacoes-aritimetricas/divisao.js";
import { somar } from "./operacoes-aritimetricas/mais.js";
import { subtrair } from "./operacoes-aritimetricas/menos.js";
import { multiplicar } from "./operacoes-aritimetricas/multiplicacao.js";
import { calcularRaiz as calcularRaizSimples } from "./operacoes-aritimetricas/raiz.js";
import { verificarParOuImpar } from "./operacoes-aritimetricas/sobras.js";
import { comparacao, compararIgualdade, verificarDiferente, verificarIdoso, verificarMaioridade, verificarNovinho } from "./operacoes-relacionais/operadores-relacionais.js";
import { verificarAcessoE } from "./operadores-logicos/e.js";
import { demonstrarNot } from "./operadores-logicos/not.js";
import { verificarAcessoOu } from "./operadores-logicos/ou.js";
import { somarVetor } from "./vetores/vetorAcumulacao.js";
import { adicionarNoFim, adicionarNoInicio } from "./vetores/vetorAdicao.js";
import { separarParesEImpares } from "./vetores/vetorBusca.js";
import { removerDoFim, removerDoInicio } from "./vetores/vetorRemocao.js";

const app = express();

app.get("/", (req, res) => {
    res.json({ mensagem: "Servidor funcionandoo muhehehe" });
});

// ==================== DECLARAÇÃO DE VARIÁVEIS ====================

// params: /concatenacao/:nome/:comida
app.get("/concatenacao/:nome/:comida", (req, res) => {
    const { nome, comida } = req.params;
    res.json(concatenacao(nome, comida));
});

// params: /variavelConst/:nome1/:nome2
app.get("/variavelConst/:nome1/:nome2", (req, res) => {
    const { nome1, nome2 } = req.params;
    res.json(variavelConst(nome1, nome2));
});

// params: /variavelLet/:nome1/:nome2
app.get("/variavelLet/:nome1/:nome2", (req, res) => {
    const { nome1, nome2 } = req.params;
    res.json(variavelLet(nome1, nome2));
});

// params: /variavelVar/:grupo
app.get("/variavelVar/:grupo", (req, res) => {
    const { grupo } = req.params;
    res.json(variavelVar(grupo));
});

// ==================== ESTRUTURAS CONDICIONAIS ====================

// params: /ifComposto/:salario
app.get("/ifComposto/:salario", (req, res) => {
    let salario = Number(req.params.salario);
    res.json(verificarSalario(salario));
});

// params: /ifElse/:salarioPessoa
app.get("/ifElse/:salarioPessoa", (req, res) => {
    let salarioPessoa = Number(req.params.salarioPessoa);
    res.json(verificarSalario2(salarioPessoa));
});

// queryString: /ifSimples?salario=6000
app.get("/ifSimples", (req, res) => {
    let salario = Number(req.query.salario);
    res.json(verificarSalario3(salario));
});

// queryString: /switchCase?casos=1
app.get("/switchCase", (req, res) => {
    const casos = Number(req.query.casos);
    res.json(classificacaoNomes(casos));
});

// queryString: /ternario?salario=3000
app.get("/ternario", (req, res) => {
    let salario = Number(req.query.salario);
    res.json(classificacaoSalario4(salario));
});

// ==================== LAÇOS DE REPETIÇÃO ====================

// queryString: /doWhile?base=2&expoente=10
app.get("/doWhile", (req, res) => {
    let base = Number(req.query.base);
    let expoente = Number(req.query.expoente);
    res.json(calcularPotencia(base, expoente));
});

// queryString: /for?numero=7
app.get("/for", (req, res) => {
    let numero = Number(req.query.numero);
    res.json(gerarTabuada(numero));
});

// queryString: /while?altura1=1.5&altura2=1.2&crescimentoAnual1=0.05&crescimentoAnual2=0.08
app.get("/while", (req, res) => {
    let altura1 = Number(req.query.altura1);
    let altura2 = Number(req.query.altura2);
    let crescimentoAnual1 = Number(req.query.crescimentoAnual1);
    let crescimentoAnual2 = Number(req.query.crescimentoAnual2);
    res.json(calcularAnosParaUltrapassar(altura1, altura2, crescimentoAnual1, crescimentoAnual2));
});

// queryString: /forEach?vetorA=10,20,30,40,50
app.get("/forEach", (req, res) => {
    let vetorA = req.query.vetorA.split(",").map(Number);
    res.json(somaAcumuladora(vetorA));
});

// queryString: /map?num=1,2,3,4,5
app.get("/map", (req, res) => {
    let num = req.query.num.split(",").map(Number);
    res.json(multiplicarVetor(num));
});

// ==================== OPERAÇÕES ARITMÉTICAS ====================

// params: /divisao/:numero1/:numero2
app.get("/divisao/:numero1/:numero2", (req, res) => {
    let numero1 = Number(req.params.numero1);
    let numero2 = Number(req.params.numero2);
    res.json(dividir(numero1, numero2));
});

// queryString: /mais?numero1=100&numero2=130
app.get("/mais", (req, res) => {
    let numero1 = Number(req.query.numero1);
    let numero2 = Number(req.query.numero2);
    res.json(somar(numero1, numero2));
});

// queryString: /menos?numero1=100&numero2=55
app.get("/menos", (req, res) => {
    let numero1 = Number(req.query.numero1);
    let numero2 = Number(req.query.numero2);
    res.json(subtrair(numero1, numero2));
});

// queryString: /multiplicacao?numero1=10&numero2=20
app.get("/multiplicacao", (req, res) => {
    let numero1 = Number(req.query.numero1);
    let numero2 = Number(req.query.numero2);
    res.json(multiplicar(numero1, numero2));
});

// params: /potencia/:base/:expoente
app.get("/potencia/:base/:expoente", (req, res) => {
    let base = Number(req.params.base);
    let expoente = Number(req.params.expoente);
    res.json(calcularPotencia(base, expoente));
});

// queryString: /raiz?num=25
app.get("/raiz", (req, res) => {
    let num = Number(req.query.num);
    res.json(calcularRaizSimples(num));
});

// queryString: /sobras?num=42
app.get("/sobras", (req, res) => {
    let num = Number(req.query.num);
    res.json(verificarParOuImpar(num));
});

// ==================== OPERAÇÕES RELACIONAIS ====================

// queryString: /maior?idade=18
app.get("/maior", (req, res) => {
    let idade = Number(req.query.idade);
    res.json(verificarMaioridade(idade));
});

// queryString: /menor?a=10&b=50
app.get("/menor", (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    res.json(comparacao(a, b));
});

// queryString: /maiorOuIgual?idade=60
app.get("/maiorOuIgual", (req, res) => {
    let idade = Number(req.query.idade);
    res.json(verificarIdoso(idade));
});

// queryString: /menorOuIgual?idade=16
app.get("/menorOuIgual", (req, res) => {
    let idade = Number(req.query.idade);
    res.json(verificarNovinho(idade));
});

// queryString: /igual?val1=18&val2=18
app.get("/igual", (req, res) => {
    let val1 = req.query.val1;
    let val2 = req.query.val2;
    res.json(compararIgualdade(val1, val2));
});

// queryString: /diferente?val1=2026&val2=2025
app.get("/diferente", (req, res) => {
    let val1 = req.query.val1;
    let val2 = req.query.val2;
    res.json(verificarDiferente(val1, val2));
});

// ==================== OPERADORES LÓGICOS ====================

// queryString: /e?temIdade=true&temAutorizacao=false
app.get("/e", (req, res) => {
    let temIdade = req.query.temIdade === "true";
    let temAutorizacao = req.query.temAutorizacao === "true";
    res.json(verificarAcessoE(temIdade, temAutorizacao));
});

// sem parâmetros — demonstra o operador NOT (inversão)
app.get("/not", (req, res) => {
    res.json(demonstrarNot());
});

// queryString: /ou?temIdade=true&temAutorizacao=false
app.get("/ou", (req, res) => {
    let temIdade = req.query.temIdade === "true";
    let temAutorizacao = req.query.temAutorizacao === "true";
    res.json(verificarAcessoOu(temIdade, temAutorizacao));
});

// ==================== VETORES ====================

// queryString: /vetorAcumulacao?num=10,20,30,40,50
app.get("/vetorAcumulacao", (req, res) => {
    let num = req.query.num.split(",").map(Number);
    res.json(somarVetor(num));
});

// queryString: /vetorAdicao1?nomes=Emolly,Micaelly,Daiane&novoNome=Estevao
app.get("/vetorAdicao1", (req, res) => {
    let nomes = req.query.nomes.split(",");
    let novoNome = req.query.novoNome;
    res.json(adicionarNoFim(nomes, novoNome));
});

// queryString: /vetorAdicao2?nomes=Micaely,Emolly&novoNome=Estevao
app.get("/vetorAdicao2", (req, res) => {
    let nomes = req.query.nomes.split(",");
    let novoNome = req.query.novoNome;
    res.json(adicionarNoInicio(nomes, novoNome));
});

// queryString: /vetorBusca?vetor=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
app.get("/vetorBusca", (req, res) => {
    let vetor = req.query.vetor.split(",").map(Number);
    res.json(separarParesEImpares(vetor));
});

// queryString: /vetorRemocao1?nomes=Emolly,Micaelly,Daiane
app.get("/vetorRemocao1", (req, res) => {
    let nomes = req.query.nomes.split(",");
    res.json(removerDoFim(nomes));
});

// queryString: /vetorRemocao2?nomes=Micaely,Emolly
app.get("/vetorRemocao2", (req, res) => {
    let nomes = req.query.nomes.split(",");
    res.json(removerDoInicio(nomes));
});

app.listen(3000, () => {
    console.log("Rodando em http://localhost:3000");
});
