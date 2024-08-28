import { Jogo } from "./Jogo";
export class BibliotecaDeJogos {
    private jogos: Jogo[];

    constructor() {
        this.jogos = []; // Inicializa o array vazio de jogos
    }

    public adicionarJogo(jogo: Jogo): void {
        try {
            this.jogos.push(jogo);
        } catch (error) {
            console.log(` adicionarJogo ERRO:${error}`)
        }
    }

    public removerJogo(title: string): void {
        try {
            for (let i = 0; i < this.jogos.length; i++) {
                if(this.jogos[i].getTitle() === title) {
                    this.jogos.splice(i, 1); // Corrigido: substituir 'slice' por 'splice' para remover o item
                    break; // Importante para interromper após encontrar o jogo a ser removido
                }
            }
            
        } catch (error) {
            console.log(` removerJogo ERRO:${error}`)
        }
        
        // Poderia ser usado um algoritmo de ordenação por titulo, uma busca por titulo, e uma remoçao do titulo
        /*
        console.log(this.jogos)
        this.jogos = this.jogos.filter(objJogo => objJogo.getTitulo !== title)
        */
    }
    
    public listarJogos(): string {
        let todosJogos: string = '';
        
        try {
            for (let i = 0; i < this.jogos.length; i++) {
                todosJogos += `${this.jogos[i].getDetalhes()}\n`; // Corrigido: usar '+=' para concatenar os detalhes de todos os jogos
            } 
        } catch (error) {
            console.log(` listarJogo ERRO:${error}`)
        }
        return todosJogos;
    
    }
}