import { leitor, IBibliotecaDeJogos, Jogo } from "../../jogos";


export class BibliotecaDeJogos implements IBibliotecaDeJogos {
    private jogos: Jogo[];

    constructor() {
        this.jogos = [];
    }

    public adicionarJogo(jogo: Jogo): void {
        this.jogos.push(jogo);
        console.log(`Jogo "${jogo.titulo}" foi adicionado à biblioteca.`);
    }

    public removerJogo(): void {
        console.log(this.jogos);
        let tituloExcluir = leitor.question('Qual titulo deseja excluir: ')
        this.jogos = this.jogos.filter(objetoJogo => objetoJogo.titulo !== tituloExcluir)
    }

    public listarJogos(): void {
        console.log("Jogos na Biblioteca:");
        this.jogos.forEach(jogo => {
            console.log(`
            Título: ${jogo.titulo}
            Gênero: ${jogo.genero}
            Classificação Etária: ${jogo.classificacaoEtaria}`);
        });
    }
}