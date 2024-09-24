"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filaDeParque_1 = require("./filaDeParque");
var ask = require("readline-sync");
function main(fila) {
    while (true) {
        var checkEmpty = fila.estaVazia() ? "Yes" : "No";
        console.clear();
        console.log("\n                -------------------------------------\n                - 1. Entrar na fila                 -\n                - 2. Atender                        -\n                - 3. Pr\u00F3ximo a ser atendifo         -\n                - 4. Empty: ".concat(checkEmpty.padEnd(24), "-\n                - 4. Size: ").concat(fila.tamanho(), "  \n                -------------------------------------\n        "));
        var user = ask.questionInt('Qual desejas? ');
        switch (user) {
            case 1:
                var cliente = ask.question('\nQuem vai entrar na Fila? ');
                fila.entrarNaFila(cliente);
                ask.question("Adicionado! ...  ");
                break;
            case 2:
                var atendido = fila.atender();
                console.log("\n".concat(atendido, " foi atendido!"));
                ask.question("...");
                break;
            case 3:
                ask.question("O pr\u00F3ximo a ser atendido \u00E9: ".concat(fila.proximaNaFila()));
                break;
        }
    }
}
var minhaFila = new filaDeParque_1.FilaDeParque();
main(minhaFila);
