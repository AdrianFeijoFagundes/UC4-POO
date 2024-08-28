import * as readLineSync from 'readline-sync';
var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    Aluno.prototype.setAluno = function () {
        var matricula = readLineSync.questionInt("Qual o numero da matricula?");
        var nome = readLineSync.question("Qual o nome do aluno? ");
        var notaProva1 = readLineSync.questionInt("Qual a nota da primeira prova? ");
        var notaProva2 = readLineSync.questionInt("Qual a nota da segunda prova? ");
        var notaTrabalho = readLineSync.questionInt("Qual a nota do trabalho? ");
    };
    Aluno.prototype.getAluno = function () {
        return "\n        ".concat(this.matricula, "\n        ").concat(this.nome, "\n        ").concat(this.notaProva1, "\n        ").concat(this.notaProva2, "\n        ").concat(this.notaTrabalho, "\n        ");
    };
    Aluno.prototype.media = function () {
        return (this.notaProva1 + this.notaProva2) / 2;
    };
    Aluno.prototype.final = function () {
        return (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3;
    };
    return Aluno;
}());
export { Aluno };
