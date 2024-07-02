let leitor = require("readline-sync")

class Produto{
    nome: string
    preco: number
    marca: string
    valorCompra: number

    constructor(nome: string, preco: number, marca: string, valorCompra: number){
        this.nome = nome
        this.preco = preco
        this.marca = marca
        this.valorCompra = valorCompra
    }

    getProduto(): void{
        console.log(`
            Nome: ${this.nome}
            Preço: ${this.preco}
            Marca: ${this.marca}
            Valor de Atacado: ${this.valorCompra}
            `);
    }

    setProduto(): void{
        let nomeUp = leitor.question("Insira o nome do produto: ")
        let precoUp = leitor.questionInt("Insira o preço: ")
        let marcaUp = leitor.question("Insira a marca: ")
        let valorCompraUp = leitor.questionInt("Insira o valor de compra do produto: ")
        this.nome = nomeUp
        this.preco = precoUp
        this.marca = marcaUp
        this.valorCompra = valorCompraUp
    }

    calcularLucro(): number{
        let lucro = this.preco - this.valorCompra
        return lucro
    }

    aplicarDesconto(): void{
        let desconto = leitor.questionInt("Qual a porcentagem de desconto? ")
        let valorDescontado = (this.preco * (100 - desconto)) / 100
        console.log(`Valor do produto com desconto: ${valorDescontado}`);
    }
}

class Venda{
    produto: Produto
    quantidade: number
    valor_total: number
    data: string

    constructor(produto: Produto, quantidade: number, data: string){
        this.produto = produto
        this.quantidade = quantidade
        this.valor_total = quantidade * this.produto.preco
        this.data = data
    }

    getVenda(): void{
        console.log(`
            Nome do Produto: ${this.produto.nome}
            Quantidade: ${this.quantidade}
            Data: ${this.data}
            Valor Total: ${this.calcularTotal()}
            `);
    }

    setVenda(): void{
        let produtoOuN = leitor.question("Você gostaria de modificar o produto? (s/n) ").toLowerCase()

        if(produtoOuN == "s"){
            this.produto.setProduto()
            let arrayInfos = modificarVenda()
            // Indice 0 = Valor da Quantidade
            // Indice 1 = Valor Data
            this.quantidade = arrayInfos[0]
            this.data = arrayInfos[1]
        } else {
            let arrayInfos = modificarVenda()
            this.quantidade = arrayInfos[0]
            this.data = arrayInfos[1]
        }

        function modificarVenda(): Array<any>{
            let quantidadeUp = leitor.questionInt("Qual a quantidade?: ")
            let dataUp = leitor.question("Qual a data da venda?: ")
            let arrayInfos = [quantidadeUp, dataUp]

            return arrayInfos
        }
    }

    calcularTotal(): number{
        let total = this.quantidade * this.produto.preco
        return total
    }

}

let produto = new Produto("Teste", 3000, "Teste", 2000)
let venda = new Venda(produto, 3, "01/07/2024")

venda.getVenda()
venda.setVenda()
venda.getVenda()
venda.setVenda()
venda.getVenda()
console.log(venda.calcularTotal())



// Função principal do Sistema
function main() {
    let opcao = '';
// loop While para o sistema rodar até o Usuario escolher a opeção "5"
    while (opcao !== '5') {
        console.log("===== LOJA DE ELETRÔNICOS =====");
        console.log("1. Cadastrar doador");
        console.log("2. Listar doadores");
        console.log("3. Buscar doador por tipo sanguíneo");
        console.log("4. Buscar doador por data da última doação");
        console.log("5. Sair");
        opcao = leitor.question("Escolha uma opcao: ");

        switch(opcao) {
            case '1':
                venda.exibirInformacoes();
                break;
            case '2':
                venda.setVenda();
                break;
            case '3':
                venda.getVenda();
                break;
            case '4':
                produto.exibirInformacoes();
                break;
            case '5':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}

// Invocando a função principal para iniciar o sistema
main();

