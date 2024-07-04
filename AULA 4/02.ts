class Jogoo {
    private _titulo: string;
    private _genero: string;
    private _classificacaoEtaria: number;

    constructor(titulo: string, genero: string, classificacaoEtaria: number) {
        this._titulo = titulo;
        this._genero = genero;
        this._classificacaoEtaria = classificacaoEtaria;
    }

    // Getter para obter o título do jogo
    get titulo(): string {
        return this._titulo;
    }

    // Getter para obter o gênero do jogo
    get genero(): string {
        return this._genero;
    }

    // Getter para obter a classificação etária do jogo
    get classificacaoEtaria(): number {
        return this._classificacaoEtaria;
    }

    // Método abstrato que será implementado nas subclasses
    abstract getDetalhes(): string;
}

class JogoEletronicop extends Jogo {
    private _plataforma: string;

    constructor(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string) {
        super(titulo, genero, classificacaoEtaria);
        this._plataforma = plataforma;
    }

    // Getter para obter a plataforma do jogo eletrônico
    get plataforma(): string {
        return this._plataforma;
    }

    // Sobrescreve o método getDetalhes para incluir a plataforma
    getDetalhes(): string {
        return `Título: ${this.titulo}, Gênero: ${this.genero}, Classificação Etária: ${this.classificacaoEtaria}, Plataforma: ${this.plataforma}`;
    }
}

class JogoDeTabuleiroo extends Jogo {
    private _numeroDeJogadores: number;

    constructor(titulo: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number) {
        super(titulo, genero, classificacaoEtaria);
        this._numeroDeJogadores = numeroDeJogadores;
    }

    // Getter para obter o número de jogadores do jogo de tabuleiro
    get numeroDeJogadores(): number {
        return this._numeroDeJogadores;
    }

    // Sobrescreve o método getDetalhes para incluir o número de jogadores
    getDetalhes(): string {
        return `Título: ${this.titulo}, Gênero: ${this.genero}, Classificação Etária: ${this.classificacaoEtaria}, Número de Jogadores: ${this.numeroDeJogadores}`;
    }
}
