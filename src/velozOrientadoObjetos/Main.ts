import * as readLineSync from 'readline-sync';
import { Carro } from "./classes/Carro";

const garagem: Array<Carro> = [
    new Carro('Uno', 10, 50),
    new Carro('Palio', 5, 50),
    new Carro('Versalies',7,  10),
    new Carro('Renegade',  8, 50),
    new Carro('Jipe', 9, 50),
    new Carro('HB20',  6, 50),
    new Carro('Onix',20, 55),
    new Carro('Prisma', 3, 100),
    new Carro('Civic', 14, 100),
    new Carro('Ford Ka', 4, 100)
];

function main() : void {
    let menu : string = '';

    while (menu != 'N' && menu != 'n') {
        console.log(" ========= Menu =========\n 1. Cadastrar novo carro \n 2. Escolher carro\n 3. Percorrer trajeto\n 4. Colocar Gasolina\n5. Sair\n========================\n")

        console.log(" Escolha uma opção")
        let option = readLineSync.questionInt(); 
        console.clear()
        let selectedCar = 0;
    
        switch (option) {
            case 1:
                console.log("Cadastrando Carro")
                console.log("Qual o modelo do carro?")
                const modelo = readLineSync.question()
                console.log("Quantos Km/L esse carro faz?")
                const consumo = readLineSync.questionFloat()
                console.log("Qual a capacidade máxima do tanque de gasolina desse carro")
                const gasolina = readLineSync.questionFloat()
                garagem.push(new Carro(modelo, consumo, gasolina))
                console.clear()
                break
            case 2:
                console.log(garagem)  
                
                console.log("Qual carro deseja escolher escreva o modelo:")  
                const carroEscolhido = readLineSync.question()
                for (let i = 0; i < garagem.length; i++) {
                    if(garagem[i].getModelo().toLowerCase() === carroEscolhido.toLowerCase()) {
                    
                        break
                    }
                }
                break
            case 3:
                console.clear()
                break
            case 4:
                console.clear()
                break
            case 5:

                break
        }
        console.log("Deseja continuar usando o programa? (S/N)")
        menu = readLineSync.question();
        console.clear()

        option = 0;
    }
}

main()

