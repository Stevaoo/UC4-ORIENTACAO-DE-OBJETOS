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
var pessoa = /** @class */ (function () {
    function pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    pessoa.prototype.cumprimentar = function () {
        console.log("Ola, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos."));
    };
    return pessoa;
}());
var novapessoa = new pessoa("luiz", 28);
novapessoa.cumprimentar();
var crinca = /** @class */ (function (_super) {
    __extends(crinca, _super);
    function crinca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    crinca.prototype.cumprimentar = function () {
        console.log("Ola, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos."));
    };
    return crinca;
}(pessoa));
var idoso = /** @class */ (function (_super) {
    __extends(idoso, _super);
    function idoso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    idoso.prototype.cumprimentar = function () {
        console.log("Ola, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos."));
    };
    return idoso;
}(pessoa));
var adulto = /** @class */ (function (_super) {
    __extends(adulto, _super);
    function adulto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    adulto.prototype.cumprimentar = function () {
        console.log("Ola, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos."));
    };
    return adulto;
}(pessoa));
var pessoaNew = new pessoa('Stevão', 18);
var crincaNew = new crinca("Arthur", 8);
var idosoNew = new idoso('Jorge', 98);
var adultoNew = new adulto('Paulo', 40);
pessoaNew.cumprimentar();
crincaNew.cumprimentar();
idosoNew.cumprimentar();
adultoNew.cumprimentar();
