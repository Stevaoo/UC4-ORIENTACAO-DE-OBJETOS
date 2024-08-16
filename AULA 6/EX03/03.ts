export class NumeroComplexo {
    private real: number; // Parte real
    private imagario: number; // Parte imaginária

    constructor(real: number, imaginario: number) {
        this.real = real;
        this.imagario = imaginario
    }
    //Retorna REAL
    public getReal(): number {
        return this.real;
    }// Retorna IMAGINARIO
    public getImaginario(): number {
        return this.imagario;
    }//Define REAL
    public setReal(reaL: number): void {
        this.real = reaL;
    }// Define IMAGINARIO
    public setImaginario(imagario: number): void {
        this.imagario = imagario;
    }
    //Soma outro número complexo ao número complexo atual.
    public somar(outroComplexo: NumeroComplexo) {
        const novoReal = this.real = + outroComplexo.real;
        const novoImaginario = this.imagario + outroComplexo.imagario;
        return new NumeroComplexo(novoReal, novoImaginario);
    }
    //Subtrai outro número complexo do número complexo atual.
    public subtrair(outroComplexo: NumeroComplexo) {
        const novoReal = this.real - outroComplexo.real;
        const novoImaginario = this.imagario - outroComplexo.imagario;
        return new NumeroComplexo(novoReal, novoImaginario);
    }
    //Multiplica o número complexo atual por outro número complexo.
    public multiplicar(outroComplexo: NumeroComplexo) {
        const novoReal = this.real * outroComplexo.real;
        const novoImaginario = this.imagario * outroComplexo.imagario;
        return new NumeroComplexo(novoReal, novoImaginario);
    }
    //Divide o número complexo atual por outro número complexo.
    public dividir(outroComplexo: NumeroComplexo) {
        const novoReal = this.real / outroComplexo.real;
        const novoImaginario = this.imagario / outroComplexo.imagario;
        return new NumeroComplexo(novoReal, novoImaginario);
    }
    //Verifica se o número complexo atual é igual a outro número complexo.
    public equals(outroComplexo: NumeroComplexo): boolean {
        if (outroComplexo.getReal() === this.real && outroComplexo.getImaginario() === this.imagario) {
            return true
        } else {
            return false
        }
    }
    //Retorna em string do número complexo.
    public toString(): string {
        return `NÚMERO REAl: ${this.real}, NÚMERO IMAGINÁRIO: ${this.imagario}`;
    }
}

// Cria o NumeroComplexo
const num1 = new NumeroComplexo(2, 3); // Representa 2 + 3i
const num2 = new NumeroComplexo(4, -1); // Representa 4 - 1i

// Soma dois números complexos
const soma = num1.somar(num2);
console.log(soma.toString()); // Saída: NÚMERO REAL: 6, NÚMERO IMAGINÁRIO: 2

// Subtrai dois números complexos
const subtracao = num1.subtrair(num2);
console.log(subtracao.toString()); // Saída: NÚMERO REAL: -2, NÚMERO IMAGINÁRIO: 4

// Multiplica dois números complexos
const multiplicacao = num1.multiplicar(num2);
console.log(multiplicacao.toString()); // Saída: NÚMERO REAL: 11, NÚMERO IMAGINÁRIO: 10

// Divide dois números complexos
const divisao = num1.dividir(num2);
console.log(divisao.toString()); // Saída: NÚMERO REAL: 0.44, NÚMERO IMAGINÁRIO: 0.88

// Verifica igualdade
const iguais = num1.equals(num2);
console.log(iguais); // Saída: false

// Modifica partes do número complexo
num1.setReal(15);
num1.setImaginario(-20);
console.log(num1.toString()); // Saída: NÚMERO REAL: 15, NÚMERO IMAGINÁRIO: -20
