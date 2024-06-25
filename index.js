"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = require("readline-sync");
var Carro = /** @class */ (function () {
    function Carro(motor, rodas, marca, cor) {
        this.motor = motor;
        this.rodas = rodas;
        this.marca = marca;
        this.cor = cor;
        this.combustivel = 70;
        this.ignicao = false;
    }
    Carro.prototype.dirigir = function () {
        if (this.ignicao === false) {
            console.log('Preciso dar igniçao no carro');
        }
        else {
            if (this.combustivel < 30) {
                console.log("Preciso colocar o tanque de combustivel est\u00E1 com ".concat(this.combustivel, "% de gasolina"));
            }
            if (this.combustivel > 0) {
                console.log('Estou dirigindo meu carro');
                this.combustivel -= 10;
            }
            else {
                this.ignicao = false;
                console.log('Acabou o combustivel');
            }
        }
    };
    Carro.prototype.colocarGasolina = function () {
        this.ignicao = false;
        console.log('Enchendo o tanque!');
        this.combustivel = 100 - this.combustivel;
    };
    Carro.prototype.darIgnicao = function () {
        console.log('Dando ignicao no carro');
        this.ignicao = true;
        this.combustivel -= 2;
    };
    return Carro;
}());
console.log("Vamos montar um carro!!");
var motor = readLineSync.questionFloat("Qual a cilindrada do motor?\n");
var rodas = readLineSync.questionInt("Qual o tamanho do aro das rodas?\n");
var marca = readLineSync.question("Qual a marca do carro?\n");
var cor = readLineSync.question("Qual a cor do carro?\n");
var carro = new Carro(motor, rodas, marca, cor);
var menu = true;
while (menu) {
    var option = readLineSync.questionInt("1- Dar iginicao\n 2 -Dirigir\n 3 -Colocar gasolina\n 4 -Sair\n");
    switch (option) {
        case 1:
            carro.darIgnicao();
            break;
        case 2:
            carro.dirigir();
            break;
        case 3:
            carro.colocarGasolina();
            break;
        case 4:
            menu = false;
            break;
    }
}
