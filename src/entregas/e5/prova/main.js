import { Data } from "../voo/Data";
import { Prova } from "./Prova";
import { Gabarito } from "./Prova";
var datateste = new Data(1, 12, 2002);
function gerarResposta() {
    var n = Math.floor(Math.random() * 11);
    var r = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E'];
    return r[n];
}
function gerarGabarito() {
    var gabarito = new Gabarito();
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
var prova = new Prova(gabaritoAleatorio);
var prova2 = new Prova(gabaritoAleatorio);
respoderProva(prova);
respoderProva(prova2);
console.log('GABARITO:');
console.log(gabaritoAleatorio.getGabarito());
function menuApp() {
    var option = true;
    while (option) {
    }
}
