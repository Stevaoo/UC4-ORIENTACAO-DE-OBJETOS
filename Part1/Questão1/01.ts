import { Ialuno } from "./interface";

class Aluno implements Ialuno{
    // Atributos da classe
    matricula: number;
    nome: string;
    notaProva1: number;
    notaProva2: number;
    notaTrabalho: number;

    // Construtor para inicializar os atributos
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    ["constructor"](matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number) {
        throw new Error("Method not implemented.");
    }

    // Método para calcular a média das provas 
    media(): number {
        return (this.notaProva1 + this.notaProva2 ) / 2;
    }

    // Método para calcular a nota final usar as provas e trabalhos como  media 
    final(): number {
        const final = (this.media() + this.notaTrabalho / 2) 
        return final;
        ;
    }
}

const aluno1 = new Aluno(1010, 'Stevão Rodrigues', 7.5, 2.0, 9.0);

console.log(`Matrícula: ${aluno1.matricula}`); // 1010
console.log(`Nome: ${aluno1.nome}`); // Stevão Rodrigues
console.log(`Média: ${aluno1.media().toFixed(2)}`); // 4.17
console.log(`Nota Final: ${aluno1.final().toFixed(2)}`); // 9.25

