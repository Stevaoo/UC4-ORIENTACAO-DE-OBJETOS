"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require('readline-sync');
var pessoa = /** @class */ (function () {
    function pessoa(nome, idade, time, telefone, país) {
        this.nome = nome;
        this.idade = idade;
        this.time = time;
        this.telefone = telefone;
        this.país = país;
    }
    pessoa.prototype.cumprimentar = function () {
        console.log("Ol\u00E1 Meu nome \u00E9 ".concat(this.nome, ", e Tenho ").concat(this.idade, " sou do ").concat(this.país, ", meu time do cora\u00E7\u00E3o \u00E9 ").concat(this.time, ", meu cell \u00E9 ").concat(this.telefone));
    };
    return pessoa;
}());
var cpx = new pessoa('Stevão', 17, 'Grêmio', 5199537755, 'Brazil');
console.log(cpx);
cpx.cumprimentar();
var nomeNew = leitor.question('Qual é seu nome? ');
var idadeNew = leitor.questionInt('Qual é sua idade? ');
var timeNew = leitor.question('Qual é seu time? ');
var cellNew = leitor.questionFloat('Qual é o número de seu telefone? ');
var paísNew = leitor.question('Qual país você Mora? ');
var pessoaNew = new pessoa(nomeNew, idadeNew, timeNew, cellNew, paísNew);
console.log(pessoaNew);
