"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeroComplexo = void 0;
var NumeroComplexo = /** @class */ (function () {
    function NumeroComplexo(parteReal, parteImaginario) {
        this.parteReal = parteReal;
        this.parteImaginario = parteImaginario;
    }
    NumeroComplexo.prototype.getParteReal = function () {
        return this.parteReal;
    };
    NumeroComplexo.prototype.setParteReal = function (parteReal) {
        this.parteReal = parteReal;
    };
    NumeroComplexo.prototype.getParteImaginario = function () {
        return this.parteImaginario;
    };
    NumeroComplexo.prototype.setParteImaginario = function (parteImaginario) {
        this.parteImaginario = parteImaginario;
    };
    NumeroComplexo.prototype.somar = function (outroComplexo) {
        var real = this.parteReal + outroComplexo.getParteReal();
        var imaginario = this.parteImaginario + outroComplexo.getParteImaginario();
        return new NumeroComplexo(real, imaginario);
    };
    NumeroComplexo.prototype.subtrair = function (outroComplexo) {
        var real = this.parteReal - outroComplexo.getParteReal();
        var imaginario = this.parteImaginario - outroComplexo.getParteImaginario();
        return new NumeroComplexo(real, imaginario);
    };
    NumeroComplexo.prototype.multiplicar = function (outroComplexo) {
        var real = (this.parteReal * outroComplexo.getParteReal()) - (this.parteImaginario * outroComplexo.getParteImaginario());
        var imaginario = (this.parteReal * outroComplexo.getParteImaginario()) + (this.parteImaginario * outroComplexo.getParteReal());
        return new NumeroComplexo(real, imaginario);
    };
    NumeroComplexo.prototype.dividir = function (outroComplexo) {
        var partePotenciacao = (Math.pow(outroComplexo.getParteReal(), 2)) + (Math.pow(outroComplexo.getParteImaginario(), 2));
        var real = ((this.parteReal * outroComplexo.getParteReal()) + (this.parteImaginario * outroComplexo.getParteImaginario())) / partePotenciacao;
        var imaginario = ((this.parteImaginario * outroComplexo.getParteReal()) - (this.parteReal * outroComplexo.getParteImaginario())) / partePotenciacao;
        return new NumeroComplexo(real, imaginario);
    };
    NumeroComplexo.prototype.modulo = function () {
        return Math.sqrt((Math.pow(this.parteReal, 2)) + (Math.pow(this.parteImaginario, 2)));
    };
    NumeroComplexo.prototype.equals = function (outroComplexo) {
        return (this.parteImaginario === outroComplexo.getParteImaginario() && this.parteReal === this.getParteImaginario());
    };
    NumeroComplexo.prototype.toString = function () {
        return this.parteReal + " + " + this.parteImaginario + "i";
    };
    return NumeroComplexo;
}());
exports.NumeroComplexo = NumeroComplexo;
/*


*/
