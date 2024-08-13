"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contador = void 0;
var Contador = /** @class */ (function () {
    function Contador() {
        this.cont = 0;
    }
    Contador.prototype.zerar = function () {
        this.cont = 0;
    };
    Contador.prototype.incrementar = function () {
        this.cont++;
    };
    Contador.prototype.valor = function () {
        return this.cont;
    };
    return Contador;
}());
exports.Contador = Contador;
