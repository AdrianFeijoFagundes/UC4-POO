import { Contador } from "./Contador";
import { NumeroComplexo } from "./NumeroComplexo";
import { Ponto2D, PontoEx, PontoXY } from "./Ponto2D";
import * as readLineSync from 'readline-sync';

import * as fs from 'fs'
// console.log(contador)


function salvarContador(cont: number): void {
    const data = [{number: cont}]
    fs.writeFileSync('./data/cont.json', JSON.stringify(data), 'utf-8')
}


function menuContador() {
    const dbContador = JSON.parse(fs.readFileSync('./data/cont.json', 'utf-8'));

    const cont = new Contador()
    const valor = dbContador[0].number || 0
    cont.setCont(valor)
    let opt = true
    
    while(opt) {
        console.log('------------------')
        console.log('-----Contador-----')
        console.log(`Contagem atual: ${cont.valor()}`)

        console.log('\n1. Incrementar')
        console.log('2. Zerar')
        console.log('3. Sair')

        let escolha = readLineSync.questionInt()

        console.clear()
        switch(escolha) {
            case 1:
                cont.incrementar()
                break
            case 2: 
                cont.zerar()
                break
            default:
                opt = false
                break
        }
        salvarContador(cont.valor())
    }
}
function salvarPonto2D(ponto1: Ponto2D, ponto2: Ponto2D):void {
    const data = [{
        x: ponto1.getX(),
        y: ponto1.getY()
    },
    {
        x: ponto2.getX(),
        y: ponto2.getY()
    }
    ]
    fs.writeFileSync('./data/ponto2d.json', JSON.stringify(data), 'utf-8')
}

function menuPonto2D() {

    const dbPonto2d = JSON.parse(fs.readFileSync('./data/ponto2d.json', 'utf-8')); 

    let pontoA = new PontoXY(dbPonto2d[0].x, dbPonto2d[0].y);
    let pontoB = new PontoXY(dbPonto2d[1].x, dbPonto2d[1].y);


    let opt = true
    while(opt) {
        console.log(`
        ------------- MENU 2 -----------------------
        1. Definir eixos X e Y.
        2. Exibir Ponto A e Ponto B.
        3. Ver distancia entre Pontos.
        4. Comparar Ponto A com o Ponto B.
        5. Sair
        --------------------------------------------
        `)
        let escolha = readLineSync.questionInt()

        console.clear()
        switch(escolha) {
            case 1:
                console.log('Deseja definir os eixos de qual ponto?')
                console.log('1. Ponto A')
                console.log('2. Ponto B')

                escolha = readLineSync.questionInt()

                if (escolha === 1) {
                    console.log("Defina o X do Ponto A")
                    pontoA.setX(readLineSync.questionInt())
                    console.log("Defina o Y do Ponto A")
                    pontoA.setY(readLineSync.questionInt())
                } else {
                    console.log("Defina o X do Ponto B")
                    pontoB.setX(readLineSync.questionInt())
                    console.log("Defina o Y do Ponto B")
                    pontoB.setY(readLineSync.questionInt())
                    
                }
                break
            case 2:
                console.log('Ponto A:')
                console.log(pontoA.toString())
                
                console.log('Ponto B:')
                console.log(pontoB.toString())
                break
            case 3:
                console.log('A distancia entre o ponto A e o ponto B é ' + pontoA.distancia(pontoB))
                break
            case 4:
                console.log('O ponto A é igual ao ponto B', pontoA.equals(pontoB) ? 'SIM' : 'NÃO')
                break
            default:
                opt = false
                break
        }
        salvarPonto2D(pontoA, pontoB)

    }
}
menuPonto2D()
menuContador()
// const pA = new Ponto2D();
// const pB = new PontoXY(30,40);
// const pC = new PontoEx(pB);

// console.log("Ponto A")
// pA.setCoordenades(10,15)
// console.log(pA.toString())
// console.log("Ponto B")
// console.log(pB.toString())
// console.log("Ponto C")
// console.log(pC.toString())

// console.log("O ponto B é igual ao ponto C?", pB.equals(pC))
// console.log("A distancia entre o ponto A e o ponto B: ", pA.distancia(pB))


// const numero = new NumeroComplexo(10,5);
// const numero2 = new NumeroComplexo(20,10);

// console.log("numero 1:")
// console.log(numero.toString())
// console.log("numero 2:")
// console.log(numero2.toString())

// const numero3 = numero.somar(numero2)
// console.log("soma: ", numero3.toString())
// const numero4 = numero.subtrair(numero2)
// console.log("subtrair: ", numero4.toString())
// const numero5 = numero.multiplicar(numero2)
// console.log("multiplicar: ", numero5.toString())
// const numero6 = numero.dividir(numero2)
// console.log("dividir: ", numero6.toString())

// console.log("modulo numero 1: ", numero.modulo())