"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jogo_1 = require("./classes/Jogo");
var BibliotecaJogos_1 = require("./classes/BibliotecaJogos");
// Exemplo de uso
var jogo1 = new Jogo_1.Jogo('Gta 5', 'Mundo Aberto', 18);
var jogo2 = new Jogo_1.JogoEletronico('Minecraft', 'Mundo Aberto', 10, 'PC');
var jogo3 = new Jogo_1.Jogo('Bully', 'Semi Aberto', 18);
var jogo4 = new Jogo_1.JogoDeTabuleiro('Pokemon', 'RPG', 10, 2);
var biblioteca = new BibliotecaJogos_1.BibliotecaDeJogos();
biblioteca.adicionarJogo(jogo1);
biblioteca.adicionarJogo(jogo2);
biblioteca.adicionarJogo(jogo3);
biblioteca.adicionarJogo(jogo4);
console.log(biblioteca.listarJogos());
console.log("remover minecraft");
biblioteca.removerJogo('Minecraft');
console.log(biblioteca.listarJogos());
