import * as readLineSync from 'readline-sync'

class Professor {
    nome: string
    idade: number
    ano_xp : number

    constructor(nome: string, idade: number, ano_xp: number) {
        this.nome = nome
        this.idade = idade 
        this.ano_xp = ano_xp
    }

    getProfessor(): string {
        return `
        ${this.nome},
        ${this.idade},
        ${this.ano_xp},
        `
    }

    setProfessor(): void{
        let nomeUp = readLineSync.question('Qual o nome do professor? ')
        let idadeUp = readLineSync.questionInt('Qual a idade de professor? ')
        let ano_xp = readLineSync.questionInt('Quantos anos de experiencia ele tem?')
    }

}
class Escola {
    prof : Professor
    nomeEscola: string
    endEscola: string
    numEscola: number

    constructor(nomeEscola: string, prof: Professor, endEscola: string, numEscola: number) {
        this.nomeEscola = nomeEscola
        this.prof = prof
        this.endEscola = endEscola
        this.numEscola = numEscola
    }
    getEscola(): string {
        return `
            ${this.nomeEscola},
            ${this.endEscola},
            ${this.numEscola},
            ${this.prof}
        `
    }

    setEscola(): void {

    }

}
const databaseProfessores : Array<string> = []
const databaseEscolas : Array<string> = []
let value : boolean = true
while(value) {
    console.log(`
            == MENU ==
        1. Criar Professor
        2. Criar Escola
        3. Modificar Professor
        4. Modificar Escola
        5. Visualizar Professor
        6. Visualizar Escola
        7. Sair

    `)
    const res: number = readLineSync.questionInt('Qual opcao voce escolhe? ')
    switch (res) {
        case 1:
            break
        case 2:
            break
        case 3:
            break
        case 4:
            break
        case 5:
            break
        case 6:
            break
        case 7:
            console.log('Encerrando programa')
            value = false           
            break
    }
       
}