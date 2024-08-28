"use strict";
// ### Questão 3 - Vôos Encantados
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
var Voo = /** @class */ (function () {
    //private passageiros: boolean[]
    function Voo(numeroVoo, data) {
        this.numeroVoo = numeroVoo;
        this.cadeiras = [];
        this.data = data;
        // this.passageiros = new Array(100).fill(false);
    }
    Voo.prototype.proximoLivre = function () {
        var assentoLivre = -1;
        if (this.cadeiras.length === 0) {
            console.log("O assento 1 \u00E9 o pr\u00F3ximo livre.");
            return 1;
        }
        for (var i = 1; i <= 99; i++) {
            if (this.cadeiras[i] - 1 !== i) {
                assentoLivre = i + 1;
                console.log("O assento ".concat(assentoLivre, " \u00E9 o pr\u00F3ximo livre."));
                break;
            }
        }
        return assentoLivre;
    };
    Voo.prototype.verifica = function (cadeira) {
        if (this.cadeiras.indexOf(cadeira) === -1) {
            console.log("A cadeira ", cadeira, "está livre");
            return true;
        }
        else {
            console.log("A cadeira ", cadeira, "está ocupada");
            return false;
        }
    };
    // "ADICIONA" um passageiro
    Voo.prototype.ocupa = function (cadeira) {
        if (this.cadeiras.length < 101) {
            if (this.verifica(cadeira)) {
                this.cadeiras.push(cadeira);
                this.cadeiras.sort();
                console.log(cadeira + " foi escolhida");
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    Voo.prototype.vagas = function () {
        var tmp = 100 - this.cadeiras.length;
        if (tmp > 1) {
            console.log("Existem", tmp, "vagas");
            return tmp;
        }
        return -1;
    };
    Voo.prototype.getVoo = function () {
        return this.numeroVoo;
    };
    Voo.prototype.getData = function () {
        return this.data;
    };
    Voo.prototype.clone = function () {
        return new Voo(this.numeroVoo, this.data);
    };
    return Voo;
}());
exports.Voo = Voo;
