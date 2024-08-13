let rl = require("readline-sync")

export interface Contador{
    valorContador: number;
    zerar(): void;
    incrimentar(): void;
    valor(): number;
}

export class Contador implements Contador{
    public valorContador: number;

    constructor(valorContador: number){
        this.valorContador = valorContador
    }

    //Começo o contador zerando ele
    zerar(): void {
        this.valorContador = 0;
    }

    // Incrimento em um em um
    public incrimentar(): void {
        this.valorContador += 1;
        // OU this.valorContador = this.valorContador + this.valorContador 
    }
    //Retorna o Valor atual do Contador
    public valor(): number {
        return this.valorContador
    }
}

let contador1 = new Contador(10)
console.log(contador1.valorContador);

contador1.incrimentar()
console.log(contador1.valorContador)

contador1.zerar()
console.log(contador1.valorContador)