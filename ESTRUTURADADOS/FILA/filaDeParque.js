"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilaDeParque = void 0;
var leitor = require("readline-sync");
var FilaDeParque = /** @class */ (function () {
    function FilaDeParque() {
        this.pessoas = [];
    }
    FilaDeParque.prototype.entrarNaFila = function (nome) {
        this.pessoas.unshift(nome);
        console.log("".concat(nome, " entrou na fila."));
    };
    FilaDeParque.prototype.atender = function () {
        if (this.estaVazia()) {
            console.log("A fila está vazia!");
            return undefined;
        }
        var atendido = this.pessoas.pop();
        console.log("".concat(atendido, " foi atendido."));
        return atendido;
    };
    FilaDeParque.prototype.proximaNaFila = function () {
        if (this.estaVazia()) {
            console.log("A fila está vazia!");
            return undefined;
        }
        return this.pessoas[this.pessoas.length - 1];
    };
    FilaDeParque.prototype.estaVazia = function () {
        return this.pessoas.length === 0;
    };
    FilaDeParque.prototype.tamanho = function () {
        return this.pessoas.length;
    };
    FilaDeParque.prototype.exibirMenu = function () {
        console.log(" \n        -----------------------------------\n        ------------ PARQUE -------------\n        -----------------------------------\n        - 1. Entrar na fila             \n        - 2. Atender algu\u00E9m     \n        - 3. Ver pr\u00F3xima na fila                       \n        - 4. Ver tamanho da fila\n        - 5. Sair                   \n        -----------------------------------");
    };
    return FilaDeParque;
}());
exports.FilaDeParque = FilaDeParque;
// Função para exibir o menu interativo
function menuInterativo() {
    var fila = new FilaDeParque();
    var continuar = true;
    while (continuar) {
        fila.exibirMenu();
        var opcao = leitor.question("Escolha uma opcao: ");
        switch (opcao) {
            case "1":
                var nome = leitor.question("Digite o nome da pessoa que quer entrar na fila: ");
                fila.entrarNaFila(nome);
                break;
            case "2":
                fila.atender();
                break;
            case "3":
                var proximo = fila.proximaNaFila();
                if (proximo) {
                    console.log("A pr\u00F3xima pessoa na fila \u00E9: ".concat(proximo));
                }
                break;
            case "4":
                console.log("Tamanho da fila: ".concat(fila.tamanho()));
                break;
            case "5":
                console.log("Saindo...");
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}
// Executar o menu interativo
menuInterativo();
