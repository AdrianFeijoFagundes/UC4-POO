var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.obterDetalhes = function () {
        return "O titulo do livro \u00E9 ".concat(this.titulo, " do autor ").concat(this.autor, " e foi publicado em ").concat(this.anoPublicacao);
    };
    return Livro;
}());
var livroDeFantasia = new Livro('Senhor dos Anéis', 'Token', 1954);
var livroDidatico = new Livro('Clean Code', 'Robert Cecil Martin', 2012);
var livroRomance = new Livro('Assim que acaba', 'Colleen Hoover', 2016);
console.log(livroDeFantasia.obterDetalhes());
console.log(livroDidatico.obterDetalhes());
console.log(livroRomance.obterDetalhes());
