"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogoDeTabuleiro = exports.JogoEletronico = exports.Jogo = void 0;
var Jogo = /** @class */ (function () {
    function Jogo(title, genero, classificacaoEtaria) {
        this.title = title;
        this.genero = genero;
        this.classificacao = classificacaoEtaria;
    }
    Jogo.prototype.getDetalhes = function () {
        return "\n            Titulo: ".concat(this.title, " \n            Genero: ").concat(this.genero, "\n            Classifica\u00E7\u00E3o et\u00E1ria: ").concat(this.classificacao, "\n        ");
    };
    Jogo.prototype.getTitle = function () {
        return this.title;
    };
    Jogo.prototype.getGenero = function () {
        return this.genero;
    };
    Jogo.prototype.getClassificacao = function () {
        return this.classificacao;
    };
    return Jogo;
}());
exports.Jogo = Jogo;
var JogoEletronico = /** @class */ (function (_super) {
    __extends(JogoEletronico, _super);
    function JogoEletronico(title, genero, classificacaoEtaria, plataforma) {
        var _this = _super.call(this, title, genero, classificacaoEtaria) || this;
        _this.plataforma = plataforma;
        return _this;
    }
    JogoEletronico.prototype.getDetalhes = function () {
        return "\n            Titulo: ".concat(this.getTitle(), " \n            Genero: ").concat(this.getGenero(), "\n            Classifica\u00E7\u00E3o et\u00E1ria: ").concat(this.getClassificacao, "\n            Plataforma: ").concat(this.plataforma, "\n        ");
    };
    return JogoEletronico;
}(Jogo));
exports.JogoEletronico = JogoEletronico;
var JogoDeTabuleiro = /** @class */ (function (_super) {
    __extends(JogoDeTabuleiro, _super);
    function JogoDeTabuleiro(title, genero, classificacaoEtaria, numeroDeJogadores) {
        var _this = _super.call(this, title, genero, classificacaoEtaria) || this;
        _this.numeroDeJogadores = numeroDeJogadores;
        return _this;
    }
    JogoDeTabuleiro.prototype.getDetalhes = function () {
        return "\n            Titulo: ".concat(this.getTitle(), " \n            Genero: ").concat(this.getGenero, "\n            Classifica\u00E7\u00E3o et\u00E1ria: ").concat(this.getClassificacao, "\n            N\u00FAmero de Jogadores: ").concat(this.numeroDeJogadores, "\n        ");
    };
    return JogoDeTabuleiro;
}(Jogo));
exports.JogoDeTabuleiro = JogoDeTabuleiro;
