// Sistema de Gerencimento de Funcionarios

let leitora = require("readline-sync");

interface Ifuncionario{
    nome : string;
    idade: number;
    cargo: string;
    id: number
    getFuncionario();
    setFuncionario();
}

interface Igerenciamento{
    bancoDeDados: [];
    removeFuncionario(Nome);
    listarFuncionario();
    quantidadeDeFuncionarios();
}

class Funcionarios implements Ifuncionario{
    public nome: string;
    public idade: number;
    public cargo: string;
    public id: number;

    constructor(nome: string, idade: number, cargo: string, id: number){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.id = id;
    }

    getFuncionario() {
        console.log(`
        Nome: ${this.nome}
        Idade: ${this.idade}
        Cargo: ${this.cargo}
        ID: ${this.id}`);
        
    }

    public setFuncionario(): void{
        let nomeUp = leitora.question("Nome do Funcinario: ")
        let idadeUp = leitora.questionInt("Idade do Funcinario: ")
        let cargoUp = leitora.question("Cargo do Funcinario: ")
        let idUp = leitora.questionInt("ID do  Funcinario: ")
        this.nome = nomeUp;
        this.idade = idadeUp;
        this.cargo = cargoUp;
        this.id = idUp;
    }
}


class Gerencimento extends Funcionarios implements Igerenciamento {
    bancoDeDados;

    super(bancoDeDados: []) {
        this.bancoDeDados = bancoDeDados;
    }

    removeFuncionario(Nome): void{
        this.bancoDeDados.slice(Nome);
        console.log(`O Funcionario ${this.nome} Foi removido com Sucesso!!`);
        
    }

    listarFuncionario(): void{
    let lista = this.bancoDeDados = this.nome
    console.log(lista);
    
    }
    
    quantidadeDeFuncionarios(): void{
        this.bancoDeDados = Funcionarios
    for (let i = 0; i < this.bancoDeDados.length; i++) {
        const Funcionarios = this.bancoDeDados[i];
        console.log(Funcionarios);
        
        }
    }
}

// Função principal para execução do programa
function menu(){
    let Funcinario = new Funcionarios("Stevão",18,"Dev",28);
    let bancoDeDados = new Gerencimento('teste',0,'teste',0);
    
    let opcao = '';

    // Loop principal para interação com o usuário
    while (opcao !== '7') {
        console.log("\n===== GERENCIAMENTO DE FUNCIONARIOS =====");
        console.log("1. Exibir Funcionarios ");
        console.log("2. Atualizar Funcionario ");
        console.log("3. Remover Funcionario ");
        console.log("4. Listar Funcionarios ");
        console.log("5. Ver Quantidade de Funcionarios");
        console.log("6. Sair\n");

        opcao = leitora.question("Escolha uma opção: ");

        switch(opcao){
            case '1':
                console.clear()
                Funcinario.getFuncionario();
                break;
            case '2':
                Funcinario.setFuncionario();
                break;
            case '3':
                bancoDeDados.removeFuncionario(String);
                break;
            case '4':
                bancoDeDados.listarFuncionario()
                break;
            case '5':
                console.log(`Quantidade de Funcionarios ${bancoDeDados.quantidadeDeFuncionarios()}`);
                break;
            case '6':
                console.log("SAINDO........");
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}

menu()