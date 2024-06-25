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
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.cumprimentar = function () {
        console.log("Ol\u00E1 meu nome \u00E9 ".concat(this.nome));
    };
    return Pessoa;
}());
var Crianca = /** @class */ (function (_super) {
    __extends(Crianca, _super);
    function Crianca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crianca.prototype.cumprimentar = function () {
        console.log("Oi ah.... a meu nome \u00E9 ".concat(this.nome, " eu tenho ").concat(this.idade, " anos."));
    };
    return Crianca;
}(Pessoa));
var Adulto = /** @class */ (function (_super) {
    __extends(Adulto, _super);
    function Adulto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adulto.prototype.cumprimentar = function () {
        console.log("Ol\u00E1 meu nome \u00E9 ".concat(this.nome, " tenho ").concat(this.idade, " anos."));
    };
    return Adulto;
}(Pessoa));
var Idoso = /** @class */ (function (_super) {
    __extends(Idoso, _super);
    function Idoso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Idoso.prototype.cumprimentar = function () {
        console.log("Ben\u00E7a, eu sou a ".concat(this.nome, " tenho ").concat(this.idade, " anos e tomo omega 3"));
    };
    return Idoso;
}(Pessoa));
var professor = new Pessoa('Iuri', 25);
var idosoDaPraca = new Idoso('Juvenal', 73);
var pirralhoRanhento = new Crianca('Enzo', 4);
var adultoPadrao = new Adulto('Antonio', 42);
professor.cumprimentar();
pirralhoRanhento.cumprimentar();
idosoDaPraca.cumprimentar();
adultoPadrao.cumprimentar();
