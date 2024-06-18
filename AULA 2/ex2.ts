class livro {
    titulo: string
    autor: string
    anoPublicacao: Number
    constructor(titulo: string, autor: string, anoPublicacao: Number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }
    obterDetalher(): void{
        console.log(`Nome do livro é ${this.titulo}, Escritor ${this.autor}, ano de lançamento ${this.anoPublicacao}`)
    }
}

var livroNew = new livro('Codigo dos guri','Tevinho',2025)
console.log(livroNew);
livroNew.obterDetalher()
