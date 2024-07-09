import { Jogo } from "./Jogo";
export class BibliotecaDeJogos {
    private jogos: Jogo[];

    constructor() {
        this.jogos = []; // Inicializa o array vazio de jogos
    }

    public adicionarJogo(jogo: Jogo): void {
        this.jogos.push(jogo);
    }

    public removerJogo(title: string): void {
        for (let i = 0; i < this.jogos.length; i++) {
            if(this.jogos[i].getTitle() === title) {
                this.jogos.splice(i, 1); // Corrigido: substituir 'slice' por 'splice' para remover o item
                break; // Importante para interromper após encontrar o jogo a ser removido
            }
        }
        // Poderia ser usado um algoritmo de ordenação por titulo, uma busca por titulo, e uma remoçao do titulo
        /*
            console.log(this.jogos)
            this.jogos = this.jogos.filter(objJogo => objJogo.getTitulo !== title)
        */
    }

    public listarJogos(): string {
        let todosJogos: string = '';
        for (let i = 0; i < this.jogos.length; i++) {
            todosJogos += `${this.jogos[i].getDetalhes()}\n`; // Corrigido: usar '+=' para concatenar os detalhes de todos os jogos
        } 
        return todosJogos;
    }
}