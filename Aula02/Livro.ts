class Livro {
    titulo: string
    autor: string
    anoPublicacao: number

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }

    obterDetalhes(): string {
        return `O titulo do livro é ${this.titulo} do autor ${this.autor} e foi publicado em ${this.anoPublicacao}`
    }
}

const livroDeFantasia = new Livro('Senhor dos Anéis', 'Token', 1954) 
const livroDidatico = new Livro('Clean Code', 'Robert Cecil Martin', 2012)
const livroRomance = new Livro('Assim que acaba', 'Colleen Hoover', 2016)

console.log(livroDeFantasia.obterDetalhes())
console.log(livroDidatico.obterDetalhes())
console.log(livroRomance.obterDetalhes())

