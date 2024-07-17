"use strict";
// Atividade Dois: Crie uma classe chamada Pessoa . Nessa classe você terá o seu
// método mágico com os seguintes atributos: nome, sobrenome, nome_do_pai,
// nome_da_mae, numero_rg, numero_cpf, data_de_nascimento.
// a) Faça um arquivo para teste onde você peça para a pessoa os dados dela e mostre
// no final o resultado;
// b) Crie um módulo que calcule a idade da pessoa e imprima. Caso seja menor de
// idade, faça um print mostrando os responsáveis (pais), caso seja de maior, apenas diga
// que não é necessário responsável.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, nome_do_pai, nome_da_mae, numero_rg, numero_cpf, ano, mes, dia) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome_do_pai = nome_do_pai;
        this.nome_da_mae = nome_da_mae;
        this.numero_rg = numero_rg;
        this.numero_cpf = numero_cpf;
        this.data_de_nascimento = [ano, mes, dia];
    }
    Pessoa.prototype.getPessoa = function () {
        return "\n        Nome completo: ".concat(this.nome, " ").concat(this.sobrenome, "\n        Nome da m\u00E3e: ").concat(this.nome_da_mae, "\n        Nome do pai: ").concat(this.nome_do_pai, "\n        RG: ").concat(this.numero_rg, "\n        CPF: ").concat(this.numero_cpf, "\n        Data de nascimento: ").concat(this.data_de_nascimento[2], "/").concat(this.data_de_nascimento[1], "/").concat(this.data_de_nascimento[0], "\n        ");
    };
    Pessoa.prototype.calcularIdade = function () {
        var date = new Date();
        var year = date.getFullYear();
        var day = date.getDate();
        var month = date.getMonth();
        var fezAniversarioEsseAno = false;
        // mes que de nascimento
        if (this.data_de_nascimento[1] < month) {
            fezAniversarioEsseAno = true;
            // mes que de nascimento                dia de nascimento
        }
        else if (this.data_de_nascimento[1] === month && this.data_de_nascimento[2] > day) {
            fezAniversarioEsseAno = true;
        }
        var diferencaAno = year - this.data_de_nascimento[0];
        console.log(diferencaAno);
        console.log(fezAniversarioEsseAno);
        if (diferencaAno > 18 || fezAniversarioEsseAno) {
            console.log('Não é necessário responsável');
        }
        else {
            console.log("\u00C9 necess\u00E1rio que seu pai ".concat(this.nome_do_pai, " ou sua m\u00E2e ").concat(this.nome_da_mae, " esteja presente"));
        }
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
