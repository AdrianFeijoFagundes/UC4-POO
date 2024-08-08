"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Data_1 = require("./Data");
var Voo_1 = require("./Voo");
var Aluno_1 = require("../aluno/Aluno");
var Prova_1 = require("./Prova");
var Prova_2 = require("./Prova");
var datateste = new Data_1.Data(1, 12, 2002);
var voo = new Voo_1.Voo('01', datateste);
var aluno = new Aluno_1.Aluno(1, 'Adrian', 10, 8, 6);
// Escreva uma classe Prova em que cada objeto representa uma prova mágica feita
// por um aluno. Esta prova possui 15 questões de múltipla escolha (letras A a E). As
// 10 primeiras questões valem 0,5 ponto e as 5 últimas questões valem 1 ponto. Esta
// classe deverá controlar as questões respondidas pelo aluno. Para isto, a classe
// deve implementar os métodos:
function gerarResposta() {
    var n = Math.floor(Math.random() * 11);
    var r = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E'];
    return r[n];
}
function gerarGabarito() {
    var gabarito = new Prova_2.Gabarito();
    for (var i = 0; i < 10; i++) {
        gabarito.addResposta('A', 0.5);
    }
    for (var i = 0; i < 5; i++) {
        gabarito.addResposta('A', 1);
    }
    return gabarito;
}
function respoderProva(prova) {
    for (var i = 0; i < 15; i++) {
        prova.respostaAluno(gerarResposta());
    }
}
var gabaritoAleatorio = gerarGabarito();
var prova = new Prova_1.Prova(gabaritoAleatorio);
var prova2 = new Prova_1.Prova(gabaritoAleatorio);
respoderProva(prova);
respoderProva(prova2);
console.log('GABARITO:');
console.log(gabaritoAleatorio.getGabarito());
console.log('Prova 1:');
console.log(prova.getRespostasAluno());
console.log('Acertos:');
console.log(prova.acertos());
console.log('Nota:');
console.log(prova.nota());
console.log('Prova 2:');
console.log(prova2.getRespostasAluno());
console.log('Acertos:');
console.log(prova2.acertos());
console.log('Nota:');
console.log(prova2.nota());
console.log(prova.maior(prova2));
// TESTE VOO
// voo.ocupa(100)
// voo.ocupa(87);
// voo.ocupa(11);
// voo.ocupa(1);
// console.log(voo)
// console.log('------')
// console.log(voo.verifica(99))
// console.log('------')
// console.log(voo.verifica(1))
// console.log('------')
// console.log(voo.vagas())
// console.log('------')
// console.log(voo.proximoLivre())
