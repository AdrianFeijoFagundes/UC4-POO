import { Info } from "../interfaces/Info";

export class Jogo implements Info {
    private title: string;
    private genero: string;
    private classificacao: number;

    constructor(title: string, genero: string, classificacaoEtaria: number) {
        this.title = title;
        this.genero = genero;
        this.classificacao = classificacaoEtaria;
    }
    public getDetalhes(): string {
        return `
            Titulo: ${this.title} 
            Genero: ${this.genero}
            Classificação etária: ${this.classificacao}
        `;
    }
    public getTitle(): string {
        return this.title;
    }
    public getGenero(): string {
        return this.genero;
    }
    public getClassificacao(): number {
        return this.classificacao;
    }
}

export class JogoEletronico extends Jogo implements Info {
    private plataforma: string;

    constructor(title: string, genero: string, classificacaoEtaria: number, plataforma: string) {
        super(title, genero, classificacaoEtaria);
        this.plataforma = plataforma;   
    }
    public getDetalhes(): string {
        return `
            Titulo: ${this.getTitle()} 
            Genero: ${this.getGenero()}
            Classificação etária: ${this.getClassificacao}
            Plataforma: ${this.plataforma}
        `;
    }
}
export class JogoDeTabuleiro extends Jogo implements Info{
    private numeroDeJogadores: number;

    constructor(title: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number) {
        super(title, genero, classificacaoEtaria);
        this.numeroDeJogadores = numeroDeJogadores; 
    }

    public getDetalhes(): string {
        return `
            Titulo: ${this.getTitle()} 
            Genero: ${this.getGenero}
            Classificação etária: ${this.getClassificacao}
            Número de Jogadores: ${this.numeroDeJogadores}
        `;
    }
}