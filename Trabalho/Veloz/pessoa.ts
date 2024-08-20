import { leitor } from "./cliente";
import { Ipessoa } from "./interfaces";
let rl = require("readline-sync");
// Molde para o obj Pessoa usando uma interface que já definou suas atribuicoes 
class Pessoa implements Ipessoa {
    nome: string;
    sobrenome: string;
    nome_do_pai: string;
    nome_da_mae: string;
    numero_rg: number;
    numero_cpf: number;
    data_de_nascimento: Array<number>;

    constructor(nome: string, sobrenome: string, nome_do_pai: string, nome_da_mae: string, numero_rg: number, numero_cpf: number, data_de_nascimento: Array<number>) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome_da_mae = nome_da_mae;
        this.nome_do_pai = nome_do_pai;
        this.numero_rg = numero_rg;
        this.numero_cpf = numero_cpf;
        this.data_de_nascimento = data_de_nascimento;
    }

    getPessoa(): void {
        console.log(`
        Nome : ${this.nome}
        Sobrenome: ${this.sobrenome}
        Nome Da Mãe: ${this.nome_da_mae}
        Nome Do Pai: ${this.nome_do_pai}
        RG: ${this.numero_rg}
        CPF: ${this.numero_cpf}
        data de Nascimento: ${this.data_de_nascimento}
        `);
    }

    setPessoa(): void {
        // insirindo os dados do usuario
        let nome = rl.question("Insira seu nome: ")
        let sobrenome = rl.question("Insira seu Sobrenome: ")
        let nomeDaMae = rl.question("Insira o Nome da sua mae: ")
        let nomeDoPai = rl.question("Insira o Nome da seu pai: ")
        let seuRG = rl.questionInt("Insira seu RG: ")
        let seuCPF = rl.questionInt("Insira seu CPF: ")
        let diaUp = rl.questionInt("Insira o dia de nascimento")
        let mesUp = rl.questionInt("insira o mês de nascimento")
        let anoUp = rl.questionInt("Insira o ano de nascimento")
        let data_de_nascimento = [diaUp,mesUp,anoUp]
        }

magia(): void {
    
}

        calcularIdade(): void {
            let anoAtual = leitor.questionInt("Em qual ano estamos? ")
            let idade = anoAtual - this.data_de_nascimento[2]
            console.log(`Você tem ${idade} anos`);
            
        }
        
    }   

    