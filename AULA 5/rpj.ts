export class Mago {
    public conjurarMagia(): void {
        console.log(`Mago conjura uma magia`);
    }
}

export class Guerreiro {
    public atacar(): void {
        console.log(`O guerreiro atacando coma espada!`);
    }
}

export class CriaturaMAgica {
    public usarMagia(): void {
        console.log(`A Criatura conjurou com a magia`);
    }
}

export class TimeAventura {
    // Membros é uma array
    public membros: (Mago | Guerreiro | CriaturaMAgica)[]

    constructor() {
        this.membros = []
    }

    public enfrentarDesafio(): void {
        console.log(`Time de aventura se preparando para  o desafio!!`);
        /*
        this.membros.forEach(jogador => {
            if(jogador instanceof Mago){
                jogador.conjurarMagia()
            } else if (jogador instanceof Guerreiro){
                jogador.atacar()
                // instanceof 
            } else if (jogador instanceof CriaturaMAgica){
                jogador.usarMagia()
            }
        }
        )
    }
    */
        for (let jogador of this.membros) {
            if (jogador instanceof Mago) {
                jogador.conjurarMagia()
            } else if (jogador instanceof Guerreiro) {
                jogador.atacar()
                // instanceof 
            } else if (jogador instanceof CriaturaMAgica) {
                jogador.usarMagia()
            }
        }
    }
}



