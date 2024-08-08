"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaDev = void 0;
var Junior_1 = require("./Junior");
var Pleno_1 = require("./Pleno");
var Senior_1 = require("./Senior");
var EmpresaDev = /** @class */ (function () {
    function EmpresaDev() {
        this.team = [];
    }
    EmpresaDev.prototype.getTeamMethod = function () {
        for (var _i = 0, _a = this.team; _i < _a.length; _i++) {
            var developer = _a[_i];
            if (developer instanceof Pleno_1.Pleno)
                return developer.criarFeature();
            if (developer instanceof Junior_1.Junior)
                return developer.resolverBugs();
            if (developer instanceof Senior_1.Senior)
                return developer.administrarEquipe();
        }
    };
    return EmpresaDev;
}());
exports.EmpresaDev = EmpresaDev;
;
