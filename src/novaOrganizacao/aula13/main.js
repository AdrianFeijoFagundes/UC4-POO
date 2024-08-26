"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contador_1 = require("./Contador");
var NumeroComplexo_1 = require("./NumeroComplexo");
var Ponto2D_1 = require("./Ponto2D");
var readLineSync = require("readline-sync");
var fs = require("fs");
function salvarContador(cont) {
    var data = [{ number: cont }];
    fs.writeFileSync('./data/cont.json', JSON.stringify(data), 'utf-8');
}
function menuContador() {
    var dbContador = JSON.parse(fs.readFileSync('./data/cont.json', 'utf-8'));
    var cont = new Contador_1.Contador();
    var valor = dbContador[0].number || 0;
    cont.setCont(valor);
    var opt = true;
    while (opt) {
        console.log('------------------');
        console.log('-----Contador-----');
        console.log("Contagem atual: ".concat(cont.valor()));
        console.log('\n1. Incrementar');
        console.log('2. Zerar');
        console.log('3. Sair');
        var escolha = readLineSync.questionInt();
        console.clear();
        switch (escolha) {
            case 1:
                cont.incrementar();
                break;
            case 2:
                cont.zerar();
                break;
            default:
                opt = false;
                break;
        }
        salvarContador(cont.valor());
    }
}
function salvarPonto2D(ponto1, ponto2) {
    var data = [{
            x: ponto1.getX(),
            y: ponto1.getY()
        },
        {
            x: ponto2.getX(),
            y: ponto2.getY()
        }
    ];
    fs.writeFileSync('./data/ponto2d.json', JSON.stringify(data), 'utf-8');
}
function menuPonto2D() {
    var dbPonto2d = JSON.parse(fs.readFileSync('./data/ponto2d.json', 'utf-8'));
    var pontoA = new Ponto2D_1.PontoXY(dbPonto2d[0].x, dbPonto2d[0].y);
    var pontoB = new Ponto2D_1.PontoXY(dbPonto2d[1].x, dbPonto2d[1].y);
    var opt = true;
    while (opt) {
        console.log("\n        ------------- MENU 2 -----------------------\n        1. Definir eixos X e Y.\n        2. Exibir Ponto A e Ponto B.\n        3. Ver distancia entre Pontos.\n        4. Comparar Ponto A com o Ponto B.\n        5. Sair\n        --------------------------------------------\n        ");
        var escolha = readLineSync.questionInt();
        console.clear();
        switch (escolha) {
            case 1:
                console.log('Deseja definir os eixos de qual ponto?');
                console.log('1. Ponto A');
                console.log('2. Ponto B');
                escolha = readLineSync.questionInt();
                if (escolha === 1) {
                    console.log("Defina o X do Ponto A");
                    pontoA.setX(readLineSync.questionInt());
                    console.log("Defina o Y do Ponto A");
                    pontoA.setY(readLineSync.questionInt());
                }
                else {
                    console.log("Defina o X do Ponto B");
                    pontoB.setX(readLineSync.questionInt());
                    console.log("Defina o Y do Ponto B");
                    pontoB.setY(readLineSync.questionInt());
                }
                break;
            case 2:
                console.log('Ponto A:');
                console.log(pontoA.toString());
                console.log('Ponto B:');
                console.log(pontoB.toString());
                break;
            case 3:
                console.log('A distancia entre o ponto A e o ponto B é ' + pontoA.distancia(pontoB));
                break;
            case 4:
                console.log('O ponto A é igual ao ponto B', pontoA.equals(pontoB) ? 'SIM' : 'NÃO');
                break;
            default:
                opt = false;
                break;
        }
        salvarPonto2D(pontoA, pontoB);
    }
}
function funNumeroComplexo() {
    var number1 = new NumeroComplexo_1.NumeroComplexo(10, 5);
    var number2 = new NumeroComplexo_1.NumeroComplexo(20, 10);
    //Usar return
    while (true) {
        console.log("\n        ------------- MENU 3 -----------------------\n          N1: ".concat(number1.toString(), " / N2: ").concat(number2.toString(), "\n        --------------------------------------------\n        1. Somar\n        2. Substrair\n        3. Multiplicacao\n        4. Divisao\n        5. Modulo\n        6. Setar Real e Imaginario do N1\n        7. Setar Real e Imaginario do N2\n        8. Voltar\n        --------------------------------------------\n        "));
        var userOption = readLineSync.question("Qual desejas Sr. ? ");
        console.clear();
        switch (userOption) {
            case '1':
                var number3 = number1.somar(number2);
                console.log("Soma: ".concat(number3.toString()));
                break;
            case '2':
                var number4 = number1.subtrair(number2);
                console.log("Subtrair: ".concat(number4.toString()));
                break;
            case '3':
                var number5 = number1.multiplicar(number2);
                console.log("Multiplica\u00E7\u00E3o: ".concat(number5.toString()));
                break;
            case '4':
                var number6 = number1.dividir(number2);
                console.log("Divisao: ".concat(number6.toString()));
                break;
            case '5':
                console.log("\n                Modulo do Numero 1: ".concat(number1.modulo(), "\n                Modulo do Numero 2: ").concat(number2.modulo(), "\n                "));
                break;
            case '6':
                number1.setParteReal(readLineSync.questionInt('Qual a parte real? '));
                number1.setParteImaginario(readLineSync.questionInt('Qual a parte imaginaria? '));
                break;
            case '7':
                number2.setParteReal(readLineSync.questionInt('Qual a parte real? '));
                number2.setParteImaginario(readLineSync.questionInt('Qual a parte imaginaria? '));
                break;
            case '8':
                return;
                break;
            default:
                readLineSync.question('Escolha uma opcao valida!');
                console.clear();
                break;
        }
    }
}
menuPonto2D();
menuContador();
funNumeroComplexo();
