import { Data } from "../Questão2/02";

var ask = require('readline-sync');
export interface Voo {
    constructor(numeroVoo: string, data: string);
    proximoLivre(): number;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): number;
    getVoo(): string;
    getData(): string;
    clone(): Voo;
}

export class Voo implements Voo{
    private passageiros: boolean[]
    public numeroVoo: string
    public data: string

    constructor(numeroVoo: string, data: string){
        this.passageiros = new Array(100).fill(false)
        this.numeroVoo = numeroVoo
        this.data = data
    }

    public proximoLivre(): number {
        for(let i = 0; i < this.passageiros.length; i++){
            if(!this.passageiros[i]){
                return i + 1
            }
        }
        return -1
    }

    public verifica(cadeira: number): boolean{
        return this.passageiros[cadeira - 1]
    }

    public ocupa(cadeira: number): boolean{
        if(!this.verifica(cadeira)){
            this.passageiros[cadeira - 1] = true
            return true
        } else {
            return false
        }
    }

    public vagas(): number{
        return this.passageiros.filter((cadeira) => !cadeira).length
    }
    
    public getVoo(): string {
        return this.numeroVoo
    }

    public getData(): string{
        return this.data
    }

    public clone(): Voo{
        return new Voo(this.numeroVoo, this.data)
    }
}

const vooUm = new Voo("voo123", "22-08-2023")

console.log(vooUm.proximoLivre())
console.log(vooUm.ocupa(1))
console.log(vooUm.proximoLivre)
console.log(vooUm.verifica(1))
console.log(vooUm.ocupa(2))
console.log(vooUm.vagas())


const voo = new Voo("182","10/09/2020");
/*
    banco de dados dos voos
    selecionar voo para comprar passagem 
    sistema de primeira classe
    tempo estimado de voo
*/
function menu() {
    let option:boolean = true;

    while(option) {
        console.log("\n--------MENU--------\n1. Escolher Assento\n2. Ver o proximo assento livre\n3. Quantidade de assentos disponiveis\n4. Sair\n--------------------\nEscolha uma opção:")         
        let choose = ask.questionInt()
        console.clear()
        switch(choose) {
            case 1:
                console.log("Qual assento voce deseja escolher?")
                let ocupa = ask.questionInt()
                voo.ocupa(ocupa)
                break
            case 2:
                voo.proximoLivre()
                break
            case 3:
                voo.vagas()
                break
            default:
                option = false
                break
        }
    }
}

menu()
