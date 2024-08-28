"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(modelo, kmPorLitro, maxGasolina) {
        this.modelo = modelo;
        this.gasolina = maxGasolina;
        this.kmPorLitro = kmPorLitro;
        this.maxGasolina = maxGasolina;
    }
    Carro.prototype.andar = function (distancia) {
        var gasto = this.kmPorLitro / distancia;
        if (gasto > this.gasolina) {
            console.log("Gasolina insufiente para percorrer essa distancia");
            return;
        }
        this.gasolina -= gasto;
    };
    Carro.prototype.getGasolina = function () {
        return this.gasolina;
    };
    Carro.prototype.setGasolina = function (gasolina) {
        var temp = this.maxGasolina - this.gasolina;
        if (temp > gasolina) {
            console.log("A quantidade de gasolina ultrapassa a capacidade do tanque.");
            return;
        }
        this.gasolina += gasolina;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    return Carro;
}());
exports.Carro = Carro;
