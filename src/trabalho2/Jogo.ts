class Jogo {
    protected title: string;
    protected genero: string;
    protected classificacaoEtaria: number;

    constructor(title: string, genero: string, classificacaoEtaria: number) {
        this.title = title;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }

    public getDetalhes(): string {
        return `
            Titulo: ${this.title} 
            Genero: ${this.genero}
            Classificação etária: ${this.classificacaoEtaria}
        `;
    }

    public getTitle(): string {
        return this.title;
    }
}

class JogoEletronico extends Jogo {
    private plataforma: string;

    constructor(title: string, genero: string, classificacaoEtaria: number, plataforma: string) {
        super(title, genero, classificacaoEtaria);
        this.plataforma = plataforma;   
    }

    public getDetalhes(): string {
        return `
            Titulo: ${this.title} 
            Genero: ${this.genero}
            Classificação etária: ${this.classificacaoEtaria}
            Plataforma: ${this.plataforma}
        `;
    }
}

class JogoDeTabuleiro extends Jogo {
    private numeroDeJogadores: number;

    constructor(title: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number) {
        super(title, genero, classificacaoEtaria);
        this.numeroDeJogadores = numeroDeJogadores; 
    }

    public getDetalhes(): string {
        return `
            Titulo: ${this.title} 
            Genero: ${this.genero}
            Classificação etária: ${this.classificacaoEtaria}
            Número de Jogadores: ${this.numeroDeJogadores}
        `;
    }
}

class BibliotecaDeJogos {
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
    }

    public listarJogos(): string {
        let todosJogos: string = '';
        for (let i = 0; i < this.jogos.length; i++) {
            todosJogos += `${this.jogos[i].getDetalhes()}\n`; // Corrigido: usar '+=' para concatenar os detalhes de todos os jogos
        } 
        return todosJogos;
    }
}

// Exemplo de uso
const jogo1 = new Jogo('Gta 5', 'Mundo Aberto', 18);
const jogo2 = new JogoEletronico('Minecraft', 'Mundo Aberto', 10, 'PC');
const jogo3 = new Jogo('Bully', 'Semi Aberto', 18);
const jogo4 = new JogoDeTabuleiro('Pokemon', 'RPG', 10, 2);

const biblioteca = new BibliotecaDeJogos();

biblioteca.adicionarJogo(jogo1);
biblioteca.adicionarJogo(jogo2);
biblioteca.adicionarJogo(jogo3);
biblioteca.adicionarJogo(jogo4);

console.log(biblioteca.listarJogos());
console.log("remover minecraft")
biblioteca.removerJogo('Minecraft')
console.log(biblioteca.listarJogos());