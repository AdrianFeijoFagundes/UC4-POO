import { Data } from "../voo/Data";
import { Prova } from "./Prova";
import { Gabarito } from "./Prova";
const datateste = new Data(1,12,2002)



function gerarResposta(): string {
    let n = Math.floor(Math.random() * 11)
    let r = ['A','A','A','A','A','A','A','B','C','D','E']
    return r[n];
} 

function gerarGabarito(): Gabarito {
    let gabarito = new Gabarito()
    for (let i = 0; i < 10; i++) {
        gabarito.addResposta('A', 0.5);
    }
    for (let i = 0; i < 5; i++) {
        gabarito.addResposta('A', 1);
    }
    return gabarito
}
function respoderProva(prova: Prova): void {
    for (let i = 0; i < 15; i++) {
        prova.respostaAluno(gerarResposta());
    }
}
const gabaritoAleatorio = gerarGabarito()
const prova = new Prova(gabaritoAleatorio);
const prova2 = new Prova(gabaritoAleatorio);


respoderProva(prova);
respoderProva(prova2);
console.log('GABARITO:')
console.log(gabaritoAleatorio.getGabarito())

console.log('Prova 1:')
console.log(prova.getRespostasAluno())
console.log('Acertos:')
console.log(prova.acertos())
console.log('Nota:')
console.log(prova.nota())
console.log('Prova 2:')
console.log(prova2.getRespostasAluno())
console.log('Acertos:')
console.log(prova2.acertos())
console.log('Nota:')
console.log(prova2.nota())

console.log(prova.maior(prova2))