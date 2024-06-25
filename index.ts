import * as readLineSync from 'readline-sync'

class Carro{
    motor: number 
    rodas: number 
    marca: string
    cor: string
    combustivel: number    
    ignicao: boolean    

    constructor( motor: number, rodas: number, marca: string, cor: string) {
        this.motor = motor
        this.rodas = rodas
        this.marca = marca
        this.cor = cor
        this.combustivel = 70
        this.ignicao = false
    }

    dirigir() : void {
        if (this.ignicao === false) {
            console.log('Preciso dar igniçao no carro')
        } else {     
            if (this.combustivel < 30) {
                console.log(`Preciso colocar o tanque de combustivel está com ${this.combustivel}% de gasolina`)
            }

            if (this.combustivel > 0 ) {
                console.log('Estou dirigindo meu carro')
                this.combustivel -= 10
            } else {
                this.ignicao = false    
                console.log('Acabou o combustivel')
            }
        }    
    }

    colocarGasolina() : void {
        this.ignicao = false
        console.log('Enchendo o tanque!')
        this.combustivel = 100 - this.combustivel
    }

    darIgnicao() : void {
        console.log('Dando ignicao no carro')
        this.ignicao = true
        this.combustivel -= 2
    }
}
class Mitsubishi extends Carro {
    modelo: string

    super( motor: number, rodas: number, cor: string, modelo: string) {
        this.motor = motor
        this.rodas = rodas
        this.marca = 'Mitsubishi'
        this.cor = cor
        this.combustivel = 70
        this.ignicao = false
    }
}
console.log("Vamos montar um carro!!")

const motor : number = readLineSync.questionFloat("Qual a cilindrada do motor?\n")
const rodas : number = readLineSync.questionInt("Qual o tamanho do aro das rodas?\n")
const marca : string = readLineSync.question("Qual a marca do carro?\n")
const cor : string = readLineSync.question("Qual a cor do carro?\n")
const carro = new Carro(motor, rodas, marca, cor)    

let menu = true 

while (menu) {
    const option : number = readLineSync.questionInt("1- Dar iginicao\n 2 -Dirigir\n 3 -Colocar gasolina\n 4 -Sair\n")

    switch (option) {
        case 1:
            carro.darIgnicao()
            break    
        case 2: 
            carro.dirigir()
            break
        case 3: 
            carro.colocarGasolina()
            break
        case 4: 
            menu = false
        break
    }
}

const  = new Carro(1.5, 18, 'fiat','preto')

