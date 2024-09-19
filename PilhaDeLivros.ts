let ask = require('readline-sync')

export class  PilhaDeLivros {
    private livros: string[] = [];

    public adicionarLivro(livro: string): void {
        this.livros.push(livro);
        console.log(`\n${livro} foi adicionado ao topo da pilha!`)
    }    
    public retirarLivro(): string | undefined {
        let livro = this.livros.pop()    
        if(livro) {
            console.log(`\n${livro} foi retirado`);
        } else {
            console.log("\nNão tem nenhum livro na pilha");
        }    
        return livro;
    }   
    public verTopo(): string | undefined {
        return this.livros[this.livros.length - 1];
    }
    public isEmpty(): boolean {
        return this.livros.length === 0;
    }   
    public size(): number {
        return this.livros.length;
    }
    public limpar(): void {
        this.livros = [];
    }
    public adicionarVariosLivros(livros: string[]): void {
        for (let livro of livros ) {
            this.adicionarLivro(livro)
        }
    }
    public retirarVariosLivros(quantidade: number): void {
        if (quantidade > this.size()) {
            console.log("\nNão tem livros suficientes para retirar");
        } else {
            for (let i = 0; i < quantidade; i++) {
                this.retirarLivro();
            }
        }

    }
}

let pilhaDeLivros = new PilhaDeLivros()

pilhaDeLivros.adicionarLivro('Harry Potter')
pilhaDeLivros.adicionarLivro('Biblia')
pilhaDeLivros.adicionarLivro('Como Invocar demonios')
pilhaDeLivros.adicionarLivro('Vigiar e punir')

pilhaDeLivros.retirarLivro()
pilhaDeLivros.retirarLivro()
pilhaDeLivros.isEmpty()
pilhaDeLivros.retirarLivro()
pilhaDeLivros.retirarLivro()
pilhaDeLivros.retirarLivro()




