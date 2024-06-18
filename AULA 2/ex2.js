var livro = /** @class */ (function () {
    function livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    livro.prototype.obterDetalher = function () {
        console.log("Nome do livro \u00E9 ".concat(this.titulo, ", Escritor ").concat(this.autor, ", ano de lan\u00E7amento ").concat(this.anoPublicacao));
    };
    return livro;
}());
var livroNew = new livro('Codigo dos guri', 'Tevinho', 2025);
console.log(livroNew);
livroNew.obterDetalher();
