export class Pilha<T>{ // T significa Type
    // O tipo  T é Type tipo  genérico no código
    private elementos: T[] = []

    // add um elemento a pilha 
    pushPilha(item: T): void {
        this.elementos.push(item)
    }

    // Remove e retorna o elemento do topo  da pilha
    popPilha(): T | undefined {
        return this.elementos.pop()
    }

    // Retorna o elemento do topo da pilha
    peek(): T | undefined {
        return this.elementos[this.elementos.length - 1]
    }

    // Retorna um boolean para dizer se está vazio ou não
    isEmpty(): boolean {
        return this.elementos.length === 0
    }

    //Verifica o tamanho da Pilha
    size(): number {
        return this.elementos.length

    }

    //Limpa a Pilha
    clear(): void {
    }
}

let minhaPilha = new Pilha<number>()