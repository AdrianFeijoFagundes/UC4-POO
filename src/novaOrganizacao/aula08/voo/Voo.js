"use strict";
// ### Questão 3 - Vôos Encantados
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
var Voo = /** @class */ (function () {
    function Voo(numeroVoo, data) {
        this.numeroVoo = numeroVoo;
        this.cadeiras = [];
        this.data = data;
    }
    Voo.prototype.proximoLivre = function () {
        for (var i = 0; i < 101; i++) {
            if (this.cadeiras[i] !== i + 1) {
                console.log("O assento ".concat(i + 1, " est\u00E1 livre"));
                return i + 1;
            }
        }
        return -1;
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
