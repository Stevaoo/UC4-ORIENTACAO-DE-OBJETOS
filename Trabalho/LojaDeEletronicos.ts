// LOJA DE ELETRÔNICOS 

interface produto{
    nome: string;
    preco: number;
    marca: string;
    calcularLucro(): number;
    exibirInformacoes(): void;
}
// interface é uma estrutura que define a forma de um objeto, especificando quais propriedades e métodos ele deve ter.
interface Venda{
    produto: produto;
    quantidade: number;
    valorTotal: number;
    data: Date; // Usada para datas e horas
    calcularValorTotal(): number;
    aplicarDesconto(desconto: number): void;
    exibirInformacoes(): void;
}
// Implementação da interface Produto
class ProdutoImp implements produto{
    constructor(public nome:string, public preco: number, public marca: string){}

    calcularLucro(): number {
        return this.preco * 2;
    }

    exibirInformacoes(): void {
        console.log(`Produto: ${this.nome}, Marca: ${this.marca}, Preço: ${this.preco}`);
        
    }
}

// Implementação da interface Vendas 
class VendasImp implements Venda{
    constructor(public nome: string, public quantidade: number, public valorTotal: number, public data: Date) {
        this.valorTotal = this.calcularValorTotal();
    }

    calcularValorTotal(): number {
        return this.produto.preco * this.quantidade;
    }

    aplicarDesconto(desconto: number): void {
        this.valorTotal - desconto;
    }

    exibirInformacoes(): void {
        console.log(`Venda - Data: ${this.data}, Quantidade: ${this.quantidade}, Valor Total: ${this.valorTotal}`);
        console.log("Detalhes do Produto:");
        this.exibirInformacoes()
        
    }
}






