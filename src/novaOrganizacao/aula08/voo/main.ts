import * as readLineSync from 'readline-sync';
import { Voo } from './Voo';
import { Data } from './Data';

const voo = new Voo('A29', new Data(14,8,2024));
/*
    banco de dados dos voos
    selecionar voo para comprar passagem 
    sistema de primeira classe
    tempo estimado de voo
*/
function menuApp() {
    let option:boolean = true;

    while(option) {
        console.log("\n--------MENU--------\n1. Escolher Assento\n2. Ver o proximo assento livre\n3. Quantidade de assentos disponiveis\n4. Sair\n--------------------\nEscolha uma opção:")         
        let choose = readLineSync.questionInt()
        console.clear()
        switch(choose) {
            case 1:
                
                break
            case 2:
                voo.proximoLivre()
                break
            case 3:
                break
            default:
                option = false
                break
        }
    }
}

menuApp()