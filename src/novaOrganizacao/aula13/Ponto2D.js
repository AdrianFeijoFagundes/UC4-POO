"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PontoEx = exports.PontoXY = exports.Ponto2D = void 0;
var Ponto2D = /** @class */ (function () {
    function Ponto2D() {
        this.x = 0;
        this.y = 0;
    }
    Ponto2D.prototype.getX = function () {
        return this.x;
    };
    Ponto2D.prototype.setX = function (x) {
        this.x = x;
    };
    Ponto2D.prototype.getY = function () {
        return this.y;
    };
    Ponto2D.prototype.setY = function (y) {
        this.y = y;
    };
    Ponto2D.prototype.setCoordenades = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Ponto2D.prototype.copiando = function (outroPonto) {
        this.x = outroPonto.getX();
        this.y = outroPonto.getY();
    };
    Ponto2D.prototype.equals = function (outroPonto) {
        if ((outroPonto.getX() === this.getX()) && (outroPonto.getX() === this.getX())) {
            return true;
        }
        else {
            return false;
        }
    };
    Ponto2D.prototype.toString = function () {
        return "x: ".concat(this.x, " y: ").concat(this.y);
    };
    /*
    A(x1,y1) B(x2,y2)

    d = /(x2 - x1)² + (y2 - y1)²
    */
    Ponto2D.prototype.distancia = function (outroPonto) {
        var x = outroPonto.getX() - this.x;
        var y = outroPonto.getY() - this.y;
        var z = (Math.pow(x, 2)) + (Math.pow(y, 2));
        var distancia = z * (z / 2);
        return distancia;
    };
    Ponto2D.prototype.clone = function () {
        return new PontoEx(this);
    };
    return Ponto2D;
}());
exports.Ponto2D = Ponto2D;
var PontoXY = /** @class */ (function (_super) {
    __extends(PontoXY, _super);
    function PontoXY(x, y) {
        var _this = _super.call(this) || this;
        _this.setCoordenades(x, y);
        return _this;
    }
    return PontoXY;
}(Ponto2D));
exports.PontoXY = PontoXY;
var PontoEx = /** @class */ (function (_super) {
    __extends(PontoEx, _super);
    function PontoEx(outroPonto) {
        var _this = _super.call(this) || this;
        _this.setCoordenades(outroPonto.getX(), outroPonto.getY());
        return _this;
    }
    return PontoEx;
}(Ponto2D));
exports.PontoEx = PontoEx;
