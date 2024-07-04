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

    public setDetalhes(title: string, genero: string, classificacaoEtaria: number): void {
        this.title = title;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    public getTitle(): string {
        return this.title;
    }
}

class JogoEletronico extends Jogo {
    private plataforma: string;

    super(title: string, genero: string, classificacaoEtaria: number, plataforma: string) {
        this.title = title;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.plataforma = plataforma;   
    }

    public getDetalhes(): string {
        return `
            Titulo: ${this.title} 
            Genero: ${this.genero}
            Classificação etária: ${this.classificacaoEtaria}
            Plataforma ${this.plataforma}
        `;
    }
    // public setDetalhes(title: string, genero: string, classificacaoEtaria: number, plataforma: string): void {
    //     this.title = title;
    //     this.genero = genero;
    //     this.classificacaoEtaria = classificacaoEtaria;
    //     this.plataforma = plataforma;
    // }
    
}
class JogoDeTabuleiro extends Jogo {
    private numeroDeJogadores: number
    super(title: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number) {
        this.title = title;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.numeroDeJogadores = numeroDeJogadores; 
    }
    public getDetalhes(): string {
        return `
            Title: ${this.title} 
            Genero: ${this.genero}
            Classificação etária: ${this.classificacaoEtaria}
            Número de Jogadores ${this.numeroDeJogadores}
        `;
    }
}

class BibliotecaDeJogos {
    private jogos: Jogo[];

    public adicionarJogo(jogo: Jogo): void {
        this.jogos.push(jogo);
    }
    public removerJogo(title: string): void {
        for (let i = 0; i < this.jogos.length; i++) {
            if(this.jogos[i].getTitle() === title) {
                this.jogos.slice(i, 1)
            }
        }
    }
    public listarJogos(): string {
        let todosJogos: string = ''
        for (let i = 0; i < this.jogos.length; i++) {
            todosJogos = `${this.jogos[i].getDetalhes()}\n`
        } 
        return todosJogos
    }
}

const jogo1 = new Jogo('Gta 5','Mundo Aberto',18)
const jogo2 = new Jogo('Minecraft','Mundo Aberto',10)
const jogo3 = new Jogo('Bully','Semi Aberto',18)
const jogo4 = new Jogo('Pokemon','RPG',10)

const biblioteca = new BibliotecaDeJogos();

biblioteca.adicionarJogo(jogo1);
biblioteca.adicionarJogo(jogo2);
biblioteca.adicionarJogo(jogo3);
biblioteca.adicionarJogo(jogo4);

console.log(biblioteca.listarJogos())