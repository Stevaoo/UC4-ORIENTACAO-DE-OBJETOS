var leitor = require('readline-sync');
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
        this.notas = [];
    }
    Aluno.prototype.addNotas = function () {
        var nota1 = leitor.questionInt("Primeira nota? ");
        var nota2 = leitor.questionInt("Segunda nota? ");
        var nota3 = leitor.questionInt("Terceira nota? ");
        this.notas.push(nota1, nota2, nota3);
    };
    Aluno.prototype.calcularNotas = function () {
        var media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
        return "A media das notas do ".concat(this.nome, " e: ").concat(media.toFixed(2));
    };
    return Aluno;
}());
var nomeALuno = leitor.question("Qual e o nome do aluno? ");
var alunoNew = new Aluno(nomeALuno);
alunoNew.addNotas();
console.log(alunoNew.calcularNotas());
