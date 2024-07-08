var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jogo = /** @class */ (function () {
    function Jogo(title, genero, classificacaoEtaria) {
        this.title = title;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    Jogo.prototype.getDetalhes = function () {
        return "\n            Titulo: ".concat(this.title, " \n            Genero: ").concat(this.genero, "\n            Classifica\u00E7\u00E3o et\u00E1ria: ").concat(this.classificacaoEtaria, "\n        ");
    };
    Jogo.prototype.getTitle = function () {
        return this.title;
    };
    return Jogo;
}());
var JogoEletronico = /** @class */ (function (_super) {
    __extends(JogoEletronico, _super);
    function JogoEletronico(title, genero, classificacaoEtaria, plataforma) {
        var _this = _super.call(this, title, genero, classificacaoEtaria) || this;
        _this.plataforma = plataforma;
        return _this;
    }
    JogoEletronico.prototype.getDetalhes = function () {
        return "\n            Titulo: ".concat(this.title, " \n            Genero: ").concat(this.genero, "\n            Classifica\u00E7\u00E3o et\u00E1ria: ").concat(this.classificacaoEtaria, "\n            Plataforma: ").concat(this.plataforma, "\n        ");
    };
    return JogoEletronico;
}(Jogo));
var JogoDeTabuleiro = /** @class */ (function (_super) {
    __extends(JogoDeTabuleiro, _super);
    function JogoDeTabuleiro(title, genero, classificacaoEtaria, numeroDeJogadores) {
        var _this = _super.call(this, title, genero, classificacaoEtaria) || this;
        _this.numeroDeJogadores = numeroDeJogadores;
        return _this;
    }
    JogoDeTabuleiro.prototype.getDetalhes = function () {
        return "\n            Titulo: ".concat(this.title, " \n            Genero: ").concat(this.genero, "\n            Classifica\u00E7\u00E3o et\u00E1ria: ").concat(this.classificacaoEtaria, "\n            N\u00FAmero de Jogadores: ").concat(this.numeroDeJogadores, "\n        ");
    };
    return JogoDeTabuleiro;
}(Jogo));
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
// Exemplo de uso
var jogo1 = new Jogo('Gta 5', 'Mundo Aberto', 18);
var jogo2 = new JogoEletronico('Minecraft', 'Mundo Aberto', 10, 'PC');
var jogo3 = new Jogo('Bully', 'Semi Aberto', 18);
var jogo4 = new JogoDeTabuleiro('Pokemon', 'RPG', 10, 2);
var biblioteca = new BibliotecaDeJogos();
biblioteca.adicionarJogo(jogo1);
biblioteca.adicionarJogo(jogo2);
biblioteca.adicionarJogo(jogo3);
biblioteca.adicionarJogo(jogo4);
console.log(biblioteca.listarJogos());
console.log("remover minecraft");
biblioteca.removerJogo('Minecraft');
console.log(biblioteca.listarJogos());
