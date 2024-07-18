import { Ialuno } from "./interface";

class Alunos implements Ialuno{
    Matricula: number;
    Nome: string;
    Nota1_da_prova: number;
    Nota2_da_prova: number;
    Nota_do_trabalho: number;

    constructor(MatriculaDoAluno: number, NomeDoAluno: string, Nota1Prova: number, Nota2Prova: number, NotaTrabalho: number){
        this.Matricula = MatriculaDoAluno;
        this.Nome = NomeDoAluno;
        this.Nota1_da_prova = Nota1Prova;
        this.Nota2_da_prova = Nota2Prova;
        this.Nota_do_trabalho = NotaTrabalho
    }

    media(): number {
        
    }

    final(): number {
        
        
    }
}