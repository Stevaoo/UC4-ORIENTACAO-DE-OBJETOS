export let leitor = require("readline-sync");

function inserirDados() {
    let Nome = leitor.question("Insira o Nome d Carro: ")
    let Gasto = leitor.question("Insira a Quantidade de Gasto:")
    let Gasolina = leitor.question("Insira a Quantiade de Gasolina:")
    let Andar = leitor.questionInt("Insira a Quantidade de Km:")

    console.log(` O Carro inserido foi ${Nome}, Foi definido R$${Gasto} de Gasto por mês,\n a Quantidade de Gasolina é ${Gasolina}L,\n A distancia inserida para o Carro andar foi ${Andar} Quilometros.`);

}

inserirDados()
