// Escreva uma classe Prova em que cada objeto representa uma prova mágica feita
// por um aluno. Esta prova possui 15 questões de múltipla escolha (letras A a E). As
// 10 primeiras questões valem 0,5 ponto e as 5 últimas questões valem 1 ponto. Esta
// classe deverá controlar as questões respondidas pelo aluno. Para isto, a classe
// deve implementar os métodos:

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

export class Gabarito {
    public respostasCorretas: string[]
    public pesos: number[]
    constructor() {
        this.pesos = []
        this.respostasCorretas = []
    }

    public addResposta(respostaCorreta: string, valor: number): void {
        this.pesos.push(valor)
        this.respostasCorretas.push(respostaCorreta) 
    }

}
export interface Prova {
    // constructor(gabarito: Gabarito);
    respostaAluno(resposta: string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): number;
}

export class Prova implements Prova {
    private respostasAluno: string[]
    private gabarito: Gabarito
    constructor(gabarito: Gabarito) {
        this.respostasAluno = []
        this.gabarito = gabarito
    }
    
    public respostaAluno(resposta: string): void {
        this.respostasAluno.push(resposta)
    }

    public nota(): number {
        let nota: number = 0
        for (let i = 0; i < this.gabarito.respostasCorretas.length; i++) {
            if (this.respostasAluno[i] === this.gabarito.respostasCorretas[i]) {
                nota += this.gabarito.pesos[i]
            }
        }
        console.log("O aluno conseguiu " + nota + "pontos")
        return nota
    }

    public acertos(): number {
        let acertos = 0 
        for (let i = 0; i < this.gabarito.respostasCorretas.length; i++) {
            if (this.respostasAluno[i] === this.gabarito.respostasCorretas[i]) {
                acertos++
            }
        }
        return acertos
    }
}