"use strict";
// Escreva uma classe Prova em que cada objeto representa uma prova mágica feita
// por um aluno. Esta prova possui 15 questões de múltipla escolha (letras A a E). As
// 10 primeiras questões valem 0,5 ponto e as 5 últimas questões valem 1 ponto. Esta
// classe deverá controlar as questões respondidas pelo aluno. Para isto, a classe
// deve implementar os métodos:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prova = exports.Gabarito = void 0;
// ```typescript
// ```
// Como posso fazer a questão 4?
//     opções de cada questão A, B, C, D, E
//     valores necessários para calcular a pontuação: 
//     média: ((pontos obtidos nas primeiras 10 questões + pontos obtidos nas 5 ultimas questões) / pontuação maxima possivel) * 10(média de 1 a 10)
//     pontuando:
//         gabarito // array de objetos, cada objeto vai implementar { respostacorreta, peso }
//         respostas do aluno = array
//         respostaAluno // adiciona a resposta do aluno a um array
//         acertos // 
//         nota //
var Gabarito = /** @class */ (function () {
    function Gabarito() {
        this.pesos = [];
        this.respostasCorretas = [];
    }
    Gabarito.prototype.getGabarito = function () {
        return "".concat(this.respostasCorretas);
    };
    Gabarito.prototype.addResposta = function (respostaCorreta, valor) {
        this.pesos.push(valor);
        this.respostasCorretas.push(respostaCorreta);
    };
    return Gabarito;
}());
exports.Gabarito = Gabarito;
var Prova = /** @class */ (function () {
    function Prova(gabarito) {
        this.respostasAluno = [];
        this.gabarito = gabarito;
    }
    Prova.prototype.getRespostasAluno = function () {
        return "".concat(this.respostasAluno);
    };
    Prova.prototype.respostaAluno = function (resposta) {
        this.respostasAluno.push(resposta);
    };
    Prova.prototype.nota = function () {
        var nota = 0;
        for (var i = 0; i < this.gabarito.respostasCorretas.length; i++) {
            if (this.respostasAluno[i] === this.gabarito.respostasCorretas[i]) {
                nota += this.gabarito.pesos[i];
            }
        }
        console.log("O aluno conseguiu " + nota + " pontos");
        return nota;
    };
    Prova.prototype.getTamanhoProva = function () {
        return this.gabarito.respostasCorretas.length;
    };
    Prova.prototype.acertos = function () {
        var acertos = 0;
        for (var i = 0; i < this.gabarito.respostasCorretas.length; i++) {
            if (this.respostasAluno[i] === this.gabarito.respostasCorretas[i]) {
                acertos++;
            }
        }
        return acertos;
    };
    Prova.prototype.maior = function (outraProva) {
        if (this.nota() > outraProva.nota()) {
            console.log("A nota dessa prova é maior");
            return this.nota();
        }
        else {
            console.log("A nota dessa prova é menor");
            return this.nota();
        }
    };
    return Prova;
}());
exports.Prova = Prova;
