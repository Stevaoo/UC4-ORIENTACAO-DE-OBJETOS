let rl3 = require("readline-sync")
//Classe que representa um número complexo.
export class NumeroComplexo {
    private Real: number;
    private Imaginario: number;

    constructor(Real: number, Imaginario: number) {
        this.Real = Real;
        this.Imaginario = Imaginario;
    }

    //Retorna o Valor da parte real.
    public getReal(): number {
        return this.Real;
    }

    //Novo valor para a parte real
    public setReal(Real: number): void {
        this.Real = Real;
    }

    //Retorna o Valor da parte imaginaria.
    public getImaginario(): number {
        return this.Imaginario;
    }

    // Novo valor para a parte imaginária.
    public setImaginario(Imaginario: number): void {
        this.Imaginario = Imaginario;
    }

    //Soma dois números complexos.
    public somar(outroComplexo: NumeroComplexo): NumeroComplexo {
        let real = this.Real + outroComplexo.getReal();
        let imaginario = this.Imaginario + outroComplexo.getImaginario();
        return new NumeroComplexo(real, imaginario);
    }

    // Subtrai um número complexo de outro.
    public subtrair(outroComplexo: NumeroComplexo): NumeroComplexo {
        let real = this.Real - outroComplexo.getReal();
        let imaginario = this.Imaginario - outroComplexo.getImaginario();
        return new NumeroComplexo(real, imaginario);
    }


    //Multiplica dois números complexos.
    public multiplicar(outroComplexo: NumeroComplexo): NumeroComplexo {
        let real = (this.Real * outroComplexo.getReal()) - (this.Imaginario * outroComplexo.getImaginario());
        let imaginario = (this.Real * outroComplexo.getImaginario()) + (this.Imaginario * outroComplexo.getReal());
        return new NumeroComplexo(real, imaginario);
    }

    // Divide um número complexo por outro.
    public dividir(outroComplexo: NumeroComplexo): NumeroComplexo {
        let partePotenciacao = (outroComplexo.getReal() * outroComplexo.getReal()) + (outroComplexo.getImaginario() * outroComplexo.getImaginario());

        // Calcula a parte real do resultado
        let real = ((this.Real * outroComplexo.getReal()) + (this.Imaginario * outroComplexo.getImaginario())) / partePotenciacao;

        // Calcula a parte imaginária do resultado
        let imaginario = ((this.Imaginario * outroComplexo.getReal()) - (this.Real * outroComplexo.getImaginario())) / partePotenciacao;
        return new NumeroComplexo(real, imaginario);
    }

    // Calcula o módulo (ou magnitude) do número complexo. que é a raiz quadrada da soma dos quadrados da parte real e imaginária.
    public modulo(): number {
        return Math.sqrt((this.Real ** 2) + (this.Imaginario ** 2));
    }

    //Verifica se dois números complexos são iguais.
    public equals(outroComplexo: NumeroComplexo): boolean {
        return (this.Imaginario === outroComplexo.getImaginario() && this.Real === outroComplexo.getReal());
    }

    //Retorna em string onúmero complexo.
    public toString(): string {
        return `REAL: ${this.Real} + IMAGINARIO: ${this.Imaginario}i`;
    }
}

// Função principal que exibe o menu e processa as opções do usuário
function menu() {
    console.log('Escolha uma opção:');
    console.log('1. Criar um número complexo');
    console.log('2. Somar dois números complexos');
    console.log('3. Subtrair dois números complexos');
    console.log('4. Multiplicar dois números complexos');
    console.log('5. Dividir dois números complexos');
    console.log('6. Calcular o módulo de um número complexo');
    console.log('7. Verificar a igualdade de dois números complexos');
    console.log('8. Sair');

    const opcao = await lerLinha('Digite o número da opção desejada: ');

    switch (opcao) {
        case '1':
           rl3.questionInt.NumeroComplexo();
            break;
        case '2':
            await operarNumerosComplexos('somar');
            break;
        case '3':
            await operarNumerosComplexos('subtrair');
            break;
        case '4':
            await operarNumerosComplexos('multiplicar');
            break;
        case '5':
            await operarNumerosComplexos('dividir');
            break;
        case '6':
            await calcularModulo();
            break;
        case '7':
            await verificarIgualdade();
            break;
        case '8':
            console.log('Saindo...');
            rl3.close();
            return;
        default:
            console.log('Opção inválida!');
    }

    // Volta ao menu principal
    menu();
}

function operarNumerosComplexos(arg0: string) {
    throw new Error("Function not implemented.");
}

function calcularModulo() {
    throw new Error("Function not implemented.");
}

function verificarIgualdade() {
    throw new Error("Function not implemented.");
}

