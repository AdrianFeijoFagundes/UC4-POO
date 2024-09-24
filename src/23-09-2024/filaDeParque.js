"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilaDeParque = void 0;
var FilaDeParque = /** @class */ (function () {
    function FilaDeParque() {
        this.pessoas = [];
    }
    FilaDeParque.prototype.entrarNaFila = function (nome) {
        this.pessoas.unshift(nome);
        //insere no início do vetor, ao invés do final
    };
    FilaDeParque.prototype.atender = function () {
        if (this.estaVazia()) {
            console.log("A fila está vazia!");
            return undefined;
        }
        return this.pessoas.pop();
        //retira do fim do vetor
    };
    FilaDeParque.prototype.proximaNaFila = function () {
        if (this.estaVazia()) {
            console.log("A fila está vazia!");
            return undefined;
        }
        return this.pessoas[this.pessoas.length - 1];
    };
    FilaDeParque.prototype.estaVazia = function () {
        return this.pessoas.length === 0;
    };
    FilaDeParque.prototype.tamanho = function () {
        return this.pessoas.length;
    };
    return FilaDeParque;
}());
exports.FilaDeParque = FilaDeParque;
