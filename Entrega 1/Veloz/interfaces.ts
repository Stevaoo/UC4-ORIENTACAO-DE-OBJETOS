import { Carro } from "./carros";

export interface Icarro {
    veiculo: string;
    consumoCombustivel: number; // km/L
    quantidadeCombustivel: number; // em litros
    
    
    andar(distancia: number): void;
    obterCombustivel(): number;
    adicionarCombustivel(quantidade: number): void; 
}
export interface Icliente {
    inserirDados(): void
}

export interface Igaragem{
    marca: string;
    
    
}

export interface Ipessoa {
    nome: string;
    sobrenome: string;
    nome_do_pai: string;
    nome_da_mae: string;
    numero_rg: number;
    numero_cpf: number;
   data_de_nascimento: Array<number>;
    getPessoa(): void
    setPessoa(): void
    magia(): void
    calcularIdade(): void
}