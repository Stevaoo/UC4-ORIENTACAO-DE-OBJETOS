import { log } from "console";

// Sistema de Jogos
let leitor = require("readline-sync");

interface Ijogo{
    getDetalhees();
    setDetalhes();
}

class Jogo implements Ijogo{ 
    titulo: string;
    genero: string;
    classificacaoEtaria: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number){
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    getDetalhees(): void {
        console.log(`
        Titulo: ${this.titulo}
        Genero: ${this.genero}
        ClassificacaoEtaria: ${this.classificacaoEtaria}`);
        
    }

    setDetalhes(): void {
        let tituloUp = leitor.question("Insira o Titulo: ")
        let generoUp = leitor.question("Insira o Gênero: ")
        let classificacaoEtariaUp = leitor.question("Insira a Classificacao Etaria: ")
        this.titulo = tituloUp;
        this.genero = generoUp;
        this.classificacaoEtaria = classificacaoEtariaUp;
    }
}

interface IjogoEletronico{
    getDetalhees();
    setDetalhes();
}

class JogoEletronico extends Jogo implements IjogoEletronico{
    jogo: Jogo;
    plataforma: string
    
    super(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string){
        this.titulo =  titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.plataforma = plataforma;
    }

    getDetalhees(): void {
        console.log(`
        Titulo: ${this.titulo}
        Genero: ${this.genero}
        ClassificacaoEtaria: ${this.classificacaoEtaria}
        Plataforma: ${this.plataforma}`);
    }

    setDetalhes(): void {
        let tituloUp = leitor.question("Insira o Titulo: ")
        let generoUp = leitor.question("Insira o Gênero: ")
        let classificacaoEtariaUp = leitor.question("Insira a Classificacao Etaria: ")
        let plataforma = leitor.question("Insira a Plataforma: ")
        this.titulo = tituloUp;
        this.genero = generoUp;
        this.classificacaoEtaria = classificacaoEtariaUp;
        this.plataforma = plataforma;
    }
}


interface IjogoDeTabuleiro{
    getDetalhees();
    setDetalhes();
}

class JogoDeTabuleiro extends Jogo implements IjogoDeTabuleiro{
    jogo: Jogo;
    jogoEletronico: JogoEletronico;
    numeroDeJogadores: number;

    super(titulo: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number){
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this. numeroDeJogadores = numeroDeJogadores;
    }

    getDetalhees(): void {
        console.log(`
        Titulo: ${this.titulo}
        Genero: ${this.genero}
        ClassificacaoEtaria: ${this.classificacaoEtaria}
        Número de Jogadore: ${this.numeroDeJogadores}`);
    }

    setDetalhes(): void {
        let tituloUp = leitor.question("Insira o Titulo: ")
        let generoUp = leitor.question("Insira o Gênero: ")
        let classificacaoEtariaUp = leitor.question("Insira a Classificacao Etaria: ")
        let numeroDeJogadoresUp = leitor.questionInt("Insira o Numero de Jogadores: ")
        this.titulo = tituloUp;
        this.genero = generoUp;
        this.classificacaoEtaria = classificacaoEtariaUp;
        this.numeroDeJogadores = numeroDeJogadoresUp;
    }
}

interface IBibliotecaDeJogos{
    adicionarJogo(jogo);
    removerJogo(titulo);
    listarJogos();
}
class BibliotecaDeJogos implements IBibliotecaDeJogos {
    private jogos: Jogo[];

    constructor() {
        this.jogos = [];
    }

    adicionarJogo(jogo: Jogo): void {
        this.jogos.push(jogo);
        console.log(`Jogo "${jogo.titulo}" foi adicionado à biblioteca.`);
    }

    removerJogo(titulo: string): void{
        this.jogos = this.jogos.filter(Jogo => jogo.titulo !== titulo )
        
    }

    listarJogos(): void{
        console.log("Jogos na Biblioteca: ");
        this.jogos.forEach(element => {
            console.log(Jogo); 
            
        });
        
    }
}

