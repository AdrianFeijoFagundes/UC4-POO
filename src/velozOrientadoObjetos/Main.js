"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = require("readline-sync");
var Carro_1 = require("./classes/Carro");
var garagem = [
    new Carro_1.Carro('Uno', 10, 50),
    new Carro_1.Carro('Palio', 5, 50),
    new Carro_1.Carro('Versalies', 7, 10),
    new Carro_1.Carro('Renegade', 8, 50),
    new Carro_1.Carro('Jipe', 9, 50),
    new Carro_1.Carro('HB20', 6, 50),
    new Carro_1.Carro('Onix', 20, 55),
    new Carro_1.Carro('Prisma', 3, 100),
    new Carro_1.Carro('Civic', 14, 100),
    new Carro_1.Carro('Ford Ka', 4, 100)
];
function main() {
    var menu = '';
    while (menu != 'N' && menu != 'n') {
        console.log(" ========= Menu =========\n 1. Cadastrar novo carro \n 2. Escolher carro\n 3. Percorrer trajeto\n 4. Colocar Gasolina\n5. Sair\n========================\n");
        console.log(" Escolha uma opção");
        var option = readLineSync.questionInt();
        console.clear();
        var selectedCar = 0;
        switch (option) {
            case 1:
                console.log("Cadastrando Carro");
                console.log("Qual o modelo do carro?");
                var modelo = readLineSync.question();
                console.log("Quantos Km/L esse carro faz?");
                var consumo = readLineSync.questionFloat();
                console.log("Qual a capacidade máxima do tanque de gasolina desse carro");
                var gasolina = readLineSync.questionFloat();
                garagem.push(new Carro_1.Carro(modelo, consumo, gasolina));
                console.clear();
                break;
            case 2:
                console.log(garagem);
                break;
            case 3:
                console.clear();
                break;
            case 4:
                console.clear();
                break;
            case 5:
                break;
        }
        console.log("Deseja continuar usando o programa? (S/N)");
        menu = readLineSync.question();
        console.clear();
        option = 0;
    }
}
main();
