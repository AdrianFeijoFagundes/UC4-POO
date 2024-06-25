class Aluno {
    nome: string 
    notas: Array<number>

    constructor(nome: string) {
        this.nome = nome 
        this.notas = []
    }

    addNotas(nota : number): void {
        this.notas.push(nota)
    }

    calcularMedia() : number {
        let soma : number = 0
        
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i]
        }

        const media : number = soma / this.notas.length
        return media 
    }
}

const alunoTDS = new Aluno('João')

alunoTDS.addNotas(10)
alunoTDS.addNotas(8)
alunoTDS.addNotas(8)

console.log(`A média das notas do ${alunoTDS.nome} é ${alunoTDS.calcularMedia().toFixed(2)}`)
