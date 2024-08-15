export class NumeroComplexo {
    private real: number; // Parte real
    private imagario: number; // Parte imaginária

    constructor(real: number, imaginario: number){
        this.real = real;
        this.imagario = imaginario
    }

    getReal(): number{
        return this.real;
    }
    getImaginario(): number{
        return this.imagario;
    }
    setReal()
}
