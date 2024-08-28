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
        try {
            return `
                Titulo: ${this.title} 
                Genero: ${this.genero}
                Classificação etária: ${this.classificacao}
            `;
        } catch (error) {
            console.log(`getDetalhes apresentou ERRO:${error}`)
        }
        return ''
    }
    public getTitle(): string {
        try {
            return this.title;    
        } catch (error) {
            console.log(`getTitulo apresentou ERRO:${error}`)
        }
        return ''
    }
    public getGenero(): string {
        try {
            return this.genero;
        } catch (error) {
            console.log(`getGenero apresentou ERRO:${error}`)
        }
        return ''
    }
    public getClassificacao(): number {
        try {
            return this.classificacao;
        } catch (error) {
            console.log(`getClassificação apresentou ERRO:${error}`)
        }
        return -1
    }
}

export class JogoEletronico extends Jogo implements Info {
    private plataforma: string;

    constructor(title: string, genero: string, classificacaoEtaria: number, plataforma: string) {
        super(title, genero, classificacaoEtaria);
        this.plataforma = plataforma;   
    }
    public getDetalhes(): string {
        try {
            return `
                Titulo: ${this.getTitle()} 
                Genero: ${this.getGenero()}
                Classificação etária: ${this.getClassificacao()}
                Plataforma: ${this.plataforma}
            `;
        } catch (error) {
            console.log(`getDetalhes apresentou ERRO:${error}`)
        }
        return ''
    }
}
export class JogoDeTabuleiro extends Jogo implements Info{
    private numeroDeJogadores: number;

    constructor(title: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number) {
        super(title, genero, classificacaoEtaria);
        this.numeroDeJogadores = numeroDeJogadores; 
    }

    public getDetalhes(): string {
        try {
            return `
                Titulo: ${this.getTitle()} 
                Genero: ${this.getGenero()}
                Classificação etária: ${this.getClassificacao()}
                Número de Jogadores: ${this.numeroDeJogadores}
            `;
        } catch (error) {
            console.log(`getDetalhes apresentou ERRO:${error}`)
        }
        return ''
    }
}