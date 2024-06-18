"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa = /** @class */ (function () {
    function pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    pessoa.prototype.cumprimentar = function () {
        console.log("Ol\u00E1 Meu nome \u00E9 ".concat(this.nome, ", e Tenho ").concat(this.idade));
    };
    return pessoa;
}());
var cpx = new pessoa('Stevão', 17);
console.log(cpx);
cpx.cumprimentar();
