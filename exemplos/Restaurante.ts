class Chef {
    nome: string
    idade: number
    ano_xp: number

    constructor (nome: string,idade: number, ano_xp: number) {
        this.nome = nome
        this.idade = idade
        this.ano_xp = ano_xp
    }
}

class Restaurante {
    chef: Chef
    nomeRes: string
    endRes: string 
    numRes: number 

    constructor(chef: Chef, nomeRes: string, endRes: string , numRes: number 
    ) {
        this.chef = chef
        this.nomeRes = nomeRes 
        this.endRes = endRes
        this.numRes = numRes
    }

    apresentacaoRest() : void {
        console.log(`Olá, somos o restaurante ${this.nomeRes} e o chefe de cozinha é ${this.chef.nome}`)
    }
}

let cozinheiro = new Chef("Rogerio", 52, 32)

let restaurante = new Restaurante(cozinheiro, "Prato Fino","Rua dos Restaurantes", 100)

restaurante.apresentacaoRest()