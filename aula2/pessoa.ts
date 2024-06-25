class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    cumprimentar(): void {
        console.log(`Olá ${this.nome}`)
    }
}

const professor = new Pessoa('Iuri', 25)

professor.cumprimentar()