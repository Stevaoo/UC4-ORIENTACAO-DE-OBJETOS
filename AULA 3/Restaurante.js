var chef = /** @class */ (function () {
    function chef(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    return chef;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante(chef, nome_res, end_res, num_res) {
        this.chef = chef;
        this.nome_res = nome_res;
        this.end_res = end_res;
        this.num_res = num_res;
    }
    Restaurante.prototype.apresentacaoRest = function () {
        console.log("Ol\u00E1, somos o restaurante ".concat(this.nome_res, " e sou o chef ").concat(this.chef.nome));
    };
    return Restaurante;
}());
var cozinheiro = new chef("Tevinho", 65, 29);
var restaurante = new Restaurante(cozinheiro, "Prato Fino", "Rua Brasil", 199);
restaurante.apresentacaoRest();
console.log(restaurante);
