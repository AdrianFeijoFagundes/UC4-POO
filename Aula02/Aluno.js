var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
        this.notas = [];
    }
    Aluno.prototype.addNotas = function (nota) {
        this.notas.push(nota);
    };
    Aluno.prototype.calcularMedia = function () {
        var soma = 0;
        for (var i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        var media = soma / this.notas.length;
        return media;
    };
    return Aluno;
}());
var alunoTDS = new Aluno('João');
alunoTDS.addNotas(10);
alunoTDS.addNotas(8);
alunoTDS.addNotas(8);
console.log("A m\u00E9dia das notas do ".concat(alunoTDS.nome, " \u00E9 ").concat(alunoTDS.calcularMedia().toFixed(2)));
