import { Contador } from "./Contador";
import { NumeroComplexo } from "./NumeroComplexo";
import { Ponto2D, PontoEx, PontoXY } from "./Ponto2D";
import * as readLineSync from 'readline-sync';

import * as fs from 'fs'

function salvarContador(cont: number): void {
    const data = [{number: cont}]
    fs.writeFileSync('../data/cont.json', JSON.stringify(data), 'utf-8')
}
function menuContador() {
    const dbContador = JSON.parse(fs.readFileSync('../data/cont.json', 'utf-8'));

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
    fs.writeFileSync('../data/ponto2d.json', JSON.stringify(data), 'utf-8')
}

function menuPonto2D() {

    const dbPonto2d = JSON.parse(fs.readFileSync('../data/ponto2d.json', 'utf-8')); 

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
function funNumeroComplexo(){
    let number1 = new NumeroComplexo(10, 5)
    let number2 = new NumeroComplexo(20, 10)
 
    //Usar return
    while(true){
        console.log(`
        ------------- MENU 3 -----------------------
          N1: ${number1.toString()} / N2: ${number2.toString()}
        --------------------------------------------
        1. Somar
        2. Substrair
        3. Multiplicacao
        4. Divisao
        5. Modulo
        6. Setar Real e Imaginario do N1
        7. Setar Real e Imaginario do N2
        8. Voltar
        --------------------------------------------
        `)
        let userOption = readLineSync.question("Qual desejas Sr. ? ")
 
        console.clear()
        switch(userOption){
            case '1':
                let number3 = number1.somar(number2)
                console.log(`Soma: ${number3.toString()}`)
                break
           
            case '2':
                let number4 = number1.subtrair(number2)
                console.log(`Subtrair: ${number4.toString()}`)
                break
 
            case '3':
                let number5 = number1.multiplicar(number2)
                console.log(`Multiplicação: ${number5.toString()}`)
                break
 
            case '4':
                let number6 = number1.dividir(number2)
                console.log(`Divisao: ${number6.toString()}`)
                break
 
            case '5':
                console.log(`
                Modulo do Numero 1: ${number1.modulo()}
                Modulo do Numero 2: ${number2.modulo()}
                `)
                break
 
            case '6':
                number1.setParteReal(readLineSync.questionInt('Qual a parte real? '))
                number1.setParteImaginario(readLineSync.questionInt('Qual a parte imaginaria? '))
                break
           
            case '7':
                number2.setParteReal(readLineSync.questionInt('Qual a parte real? '))
                number2.setParteImaginario(readLineSync.questionInt('Qual a parte imaginaria? '))
                break
 
            case '8':
                return
        
            default:
                readLineSync.question('Escolha uma opcao valida!')
                console.clear()
                break
        }
    }
}
menuPonto2D()
menuContador()
funNumeroComplexo()