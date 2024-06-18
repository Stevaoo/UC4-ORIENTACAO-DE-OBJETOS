var leitor = require('readline-sync')
import { log } from "console";

class pessoa{
    nome: string
    idade: Number
    time: string
    telefone: Number
    país: string

    constructor(nome: string, idade: Number, time: string, telefone: Number, país: string){
        this.nome = nome
        this.idade = idade
        this.time = time
        this.telefone = telefone
        this.país = país
    }

    cumprimentar(): void{
        console.log(`Olá Meu nome é ${this.nome}, e Tenho ${this.idade} sou do ${this.país}, meu time do coração é ${this.time}, meu cell é ${this.telefone}`);
        
    }
}

var cpx = new pessoa('Stevão',17,'Grêmio',5199537755,'Brazil')
console.log(cpx);
cpx.cumprimentar()


/*
var nomeNew = leitor.question('Qual é seu nome? ')
var idadeNew = leitor.questionInt('Qual é sua idade? ')
var timeNew = leitor.question('Qual é seu time? ')
var cellNew = leitor.questionFloat('Qual é o número de seu telefone? ')
var paísNew = leitor.question('Qual país você Mora? ')

var pessoaNew = new pessoa(nomeNew,idadeNew,timeNew,cellNew,paísNew)
console.log(pessoaNew);
*/


