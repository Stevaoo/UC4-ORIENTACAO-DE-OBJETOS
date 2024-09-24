let leitor = require("readline-sync");

export class FilaDeParque {
    private pessoas: string[] = [];

    public entrarNaFila(nome: string): void {
        this.pessoas.unshift(nome);
        console.log(`${nome} entrou na fila.`);
    }

    public atender(): string | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia!");
            return undefined;
        }
        const atendido = this.pessoas.pop();
        console.log(`${atendido} foi atendido.`);
        return atendido;
    }

    public proximaNaFila(): string | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia!");
            return undefined;
        }
        return this.pessoas[this.pessoas.length - 1];
    }

    public estaVazia(): boolean {
        return this.pessoas.length === 0;
    }

    public tamanho(): number {
        return this.pessoas.length;
    }

    public exibirMenu(): void {
        console.log(`\ 
        -----------------------------------
        ------------ PARQUE -------------
        -----------------------------------
        - 1. Entrar na fila             
        - 2. Atender alguém     
        - 3. Ver próxima na fila                       
        - 4. Ver tamanho da fila
        - 5. Sair                   
        -----------------------------------`);
    }
}

// Função para exibir o menu interativo
function menuInterativo() {
    const fila = new FilaDeParque();
    let continuar = true;

    while (continuar) {
        fila.exibirMenu();
        const opcao = leitor.question("Escolha uma opcao: ");

        switch (opcao) {
            case "1":
                const nome = leitor.question("Digite o nome da pessoa que quer entrar na fila: ");
                fila.entrarNaFila(nome);
                break;
            case "2":
                fila.atender();
                break;
            case "3":
                const proximo = fila.proximaNaFila();
                if (proximo) {
                    console.log(`A próxima pessoa na fila é: ${proximo}`);
                }
                break;
            case "4":
                console.log(`Tamanho da fila: ${fila.tamanho()}`);
                break;
            case "5":
                console.log("Saindo...");
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

// Executar o menu interativo
menuInterativo();
