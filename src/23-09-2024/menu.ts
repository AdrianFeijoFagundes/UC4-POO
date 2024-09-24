import { FilaDeParque } from "./filaDeParque"

import * as ask from 'readline-sync';

function main(fila: FilaDeParque) {
    while(true) {
        let checkEmpty = fila.estaVazia() ? "Yes" : "No"
        console.clear()
        console.log(`
                -------------------------------------
                - 1. Entrar na fila                 -
                - 2. Atender                        -
                - 3. Próximo a ser atendifo         -
                - 4. Empty: ${checkEmpty.padEnd(24)}-
                - 4. Size: ${fila.tamanho()}  
                -------------------------------------
        `)
        let user = ask.questionInt('Qual desejas? ')
 
        switch(user) {
            case 1:
                let cliente = ask.question('\nQuem vai entrar na Fila? ')
                fila.entrarNaFila(cliente)
                ask.question("Adicionado! ...  ")
                break
 
            case 2:
                let atendido = fila.atender()
                console.log(`\n${atendido} foi atendido!`)
                ask.question(`...`)
                break
 
            case 3:
                ask.question(`O próximo a ser atendido é: ${fila.proximaNaFila()}`)
                break
 
        }
    }
}
let minhaFila = new FilaDeParque() 
main(minhaFila)