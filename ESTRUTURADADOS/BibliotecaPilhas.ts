export class PilhaDeLivros {
    private Livros: string[] = [] 

    adicionarLivro(livro: string): void {
        this.Livros.push(livro)
        console.log(`${livro} foi colocado no topo da pilha!`);
    }

    retirarLivro(): string | undefined{
        const livro = this.Livros.pop()
        if(livro){
            console.log(`${livro} foi removido do topo da pilha`);
        } else {
            console.log("A pilha esta vazia.");
        }
        return livro
    }
    
    estaVazia(): Boolean {
        return this.Livros.length === 0
    }

    sizeLivro(): number {
        return this.Livros.length
    }

    addfor():void{
        
for (let i = 0; i < this.Livros.length; i++) {
    console.log(`Livro ${this.Livros[i]} Foi Adicionado a Pilha`);
        } 
    }
}

const pilha = new PilhaDeLivros()

pilha.adicionarLivro("Pai Filho Pai Pobre")
pilha.adicionarLivro("A Procura da Felicidade")
pilha.adicionarLivro("O Legado")
pilha.adicionarLivro("Café com Deus")


pilha.addfor
pilha.retirarLivro()
pilha.retirarLivro()

console.log(`A pilha de Livros está vazia? ${pilha.estaVazia()}`);
console.log(`Tamanho da pilha: ${pilha.sizeLivro()}`);


