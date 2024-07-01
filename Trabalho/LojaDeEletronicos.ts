// Interface Produto
interface Produto {
    nome: string;
    preco: number;
    marca: string;
    calcularLucro(): number;
    exibirInformacoes(): void;
}

// Interface Venda
interface Venda {
    produto: Produto;
    quantidade: number;
    valorTotal: number;
    data: Date;
    calcularValorTotal(): number;
    aplicarDesconto(desconto: number): void;
    exibirInformacoes(): void;
}

// Implementação da classe Produto
class ProdutoImp implements Produto {
    constructor(public nome: string, public preco: number, public marca: string) {}

    calcularLucro(): number {
        // cálculo de lucro
        return this.preco * 0.1; // 10% de margem de lucro
    }

    exibirInformacoes(): void {
        console.log(`Produto: ${this.nome}, Marca: ${this.marca}, Preço: ${this.preco}`);
    }
}

// Implementação da classe Venda
class VendaImpl implements Venda {
    valorTotal: number;
    constructor(public produto: Produto, public quantidade: number, public data: Date) {}

    calcularValorTotal(): number {
        return this.produto.preco * this.quantidade;
    }

    aplicarDesconto(desconto: number): void {
        let valorDescontado = this.calcularValorTotal() * (desconto / 100); // juros simples 
        this.valorTotal = this.calcularValorTotal() - valorDescontado;
    }

    exibirInformacoes(): void {
        console.log(`Produto: ${this.produto.nome}, Quantidade: ${this.quantidade}, Data: ${this.data}`);
    }

    get total(): number {
        return this.valorTotal;
    }

    get date(): Date {
        return this.data;
    }
}

// Criando produtos
let TV = new ProdutoImp("Smart TV", 2500, "TCL");
let Telefone = new ProdutoImp("Celular", 5000, "Iphone 13 Pro");
let VideoGame = new ProdutoImp("Video Game", 3200, "Play 5");

// Criando vendas
let venda1 = new VendaImpl(TV, 1, new Date('2024-11-27'));
let venda2 = new VendaImpl(Telefone, 3, new Date('2024-05-11'));
let venda3 = new VendaImpl(VideoGame, 1, new Date('2024-02-19'));

// Exibindo informações de um produto específico
TV.exibirInformacoes();

// Calculando o lucro de um produto específico
console.log(`Lucro da TV: ${TV.calcularLucro()}`);

// Exibindo informações de uma venda específica
venda1.exibirInformacoes();

// Calculando o total de vendas realizadas
let totalVendas = venda1.valorTotal + venda2.valorTotal + venda3.valorTotal;
console.log(`Total de vendas realizadas: ${totalVendas}`);


