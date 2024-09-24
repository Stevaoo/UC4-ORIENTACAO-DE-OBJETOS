"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PilhaDeLivros = void 0;
var PilhaDeLivros = /** @class */ (function () {
    function PilhaDeLivros() {
        this.Livros = [];
    }
    PilhaDeLivros.prototype.adicionarLivro = function (livro) {
        this.Livros.push(livro);
        console.log("".concat(livro, " foi colocado no topo da pilha!"));
    };
    PilhaDeLivros.prototype.retirarLivro = function () {
        var livro = this.Livros.pop();
        if (livro) {
            console.log("".concat(livro, " foi removido do topo da pilha"));
        }
        else {
            console.log("A pilha esta vazia.");
        }
        return livro;
    };
    PilhaDeLivros.prototype.estaVazia = function () {
        return this.Livros.length === 0;
    };
    PilhaDeLivros.prototype.sizeLivro = function () {
        return this.Livros.length;
    };
    PilhaDeLivros.prototype.addfor = function () {
        for (var i = 0; i < this.Livros.length; i++) {
            console.log("Livro ".concat(this.Livros[i], " Foi Adicionado a Pilha"));
        }
    };
    return PilhaDeLivros;
}());
exports.PilhaDeLivros = PilhaDeLivros;
var pilha = new PilhaDeLivros();
pilha.adicionarLivro("Pai Filho Pai Pobre");
pilha.adicionarLivro("A Procura da Felicidade");
pilha.adicionarLivro("O Legado");
pilha.adicionarLivro("Café com Deus");
pilha.addfor();
pilha.retirarLivro();
pilha.retirarLivro();
console.log("A pilha de Livros est\u00E1 vazia? ".concat(pilha.estaVazia()));
console.log("Tamanho da pilha: ".concat(pilha.sizeLivro()));
