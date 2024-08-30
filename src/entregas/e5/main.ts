import * as readLineSync from 'readline-sync';
import { Data } from "./classes/Data";
import { Prova } from "./classes/Prova";
import { Gabarito } from "./classes/Prova";
import { Voo } from './classes/Voo';
import { Aluno } from './classes/Aluno';

function menuAluno(): void {
    // criar aluno
    console.log("Olá aluno!")
    readLineSync.question("\ ...clique para continuar")
    
    const matricula = Math.round(Math.random() * 1000)
    const nome = readLineSync.question('Qual seu nome? ')
    const notaA = readLineSync.questionInt('Qual sua nota na primeira prova? ')
    const notaB = readLineSync.questionInt('Qual sua nota na segunda prova? ')
    const notaTrabalho = readLineSync.questionInt('Qual sua nota no trabalho? ')

    const voce = new Aluno(matricula, nome, notaA, notaB, notaTrabalho)

    console.clear()

    while(true) {
        console.clear()
        console.log("O que deseja fazer a seguir ")
        console.log("1. Ver sua média nas provas ")
        console.log("2. Ver sua média final")
        console.log("3. Ver suas informações")
        console.log("4. Sair")
        let opt = readLineSync.questionInt("Escolha uma opcao: ")
        console.clear()
        switch (opt) {
            case 1: 
                console.log("A média das sua provas é",voce.media().toFixed(2))
                readLineSync.question("\ ...clique para continuar")
                break
            case 2:    
                console.log("Sua média final",voce.final().toFixed(2))
                readLineSync.question("\ ...clique para continuar")
                break
            case 3:
                console.log("Suas informações:")
                console.log(voce.getAluno())
                readLineSync.question("\ ...clique para continuar")
                break
            case 4: 
                return
        }
    }
}
function menuProva(): void {}
function menuVoo(): void {}
function menuData(): void {}

menuAluno()