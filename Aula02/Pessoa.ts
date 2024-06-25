class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    cumprimentar(): void {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}
class Crianca extends Pessoa {
    cumprimentar(): void {
        console.log(`Oi ah.... a meu nome é ${this.nome} eu tenho ${this.idade} anos.`)
    }
}
class Adulto extends Pessoa {
    cumprimentar(): void {
        console.log(`Olá meu nome é ${this.nome} tenho ${this.idade} anos.`)
    }
}
class Idoso extends Pessoa {
    cumprimentar(): void {
        console.log(`Bença, eu sou a ${this.nome} tenho ${this.idade} anos e tomo omega 3`)
    }
}
const professor = new Pessoa('Iuri', 25)
const idosoDaPraca = new Idoso('Juvenal', 73)
const pirralhoRanhento = new Crianca('Enzo', 4)
const adultoPadrao = new Adulto('Antonio', 42)

professor.cumprimentar()
pirralhoRanhento.cumprimentar()
idosoDaPraca.cumprimentar()
adultoPadrao.cumprimentar()