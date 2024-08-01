let leitor = require('readline-sync')

class Aluno{
    nome: string
    notas: number[]

    constructor(nome: string){
        this.nome = nome
        this.notas = []
    }

    addNotas(): void{
        let nota1 = leitor.questionInt("Primeira nota? ")
        let nota2 = leitor.questionInt("Segunda nota? ")
        let nota3 = leitor.questionInt("Terceira nota? ")
        this.notas.push(nota1,nota2,nota3)
    }

    calcularNotas(){
        let media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3
        return `A media das notas do ${this.nome} e: ${media.toFixed(2)}`
    }
    
}

let nomeALuno = leitor.question("Qual e o nome do aluno? ")
let alunoNew = new Aluno(nomeALuno)

alunoNew.addNotas()

console.log(alunoNew.calcularNotas());

