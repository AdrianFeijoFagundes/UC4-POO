"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliotecaDeJogos = void 0;
var BibliotecaDeJogos = /** @class */ (function () {
    function BibliotecaDeJogos() {
        this.jogos = []; // Inicializa o array vazio de jogos
    }
    BibliotecaDeJogos.prototype.adicionarJogo = function (jogo) {
        this.jogos.push(jogo);
    };
    BibliotecaDeJogos.prototype.removerJogo = function (title) {
        for (var i = 0; i < this.jogos.length; i++) {
            if (this.jogos[i].getTitle() === title) {
                this.jogos.splice(i, 1); // Corrigido: substituir 'slice' por 'splice' para remover o item
                break; // Importante para interromper após encontrar o jogo a ser removido
            }
        }
        // Poderia ser usado um algoritmo de ordenação por titulo, uma busca por titulo, e uma remoçao do titulo
        /*
            console.log(this.jogos)
            this.jogos = this.jogos.filter(objJogo => objJogo.getTitulo !== title)
        */
    };
    BibliotecaDeJogos.prototype.listarJogos = function () {
        var todosJogos = '';
        for (var i = 0; i < this.jogos.length; i++) {
            todosJogos += "".concat(this.jogos[i].getDetalhes(), "\n"); // Corrigido: usar '+=' para concatenar os detalhes de todos os jogos
        }
        return todosJogos;
    };
    return BibliotecaDeJogos;
}());
exports.BibliotecaDeJogos = BibliotecaDeJogos;
