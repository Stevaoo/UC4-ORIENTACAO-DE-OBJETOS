export class Ponto2D {
    private x: number; // Coordenada X do ponto
    private y: number; // Coordenada Y do ponto

    constructor() {
        this.x = 0; // Começa a coordenada X com 0
        this.y = 0; // Começa a coordenada Y com 0
    }

    // Retorna o valor inicial da coordenada X
    public getX(): number {
        return this.x;
    }

    // Define o valor da coordenada X
    public setX(x: number): void {
        this.x = x;
    }

    // Retorna o valor inicial da coordenada Y
    public getY(): number {
        return this.y;
    }

    // Define o valor da coordenada Y
    public setY(y: number): void {
        this.y = y;
    }

    // Define X e Y 
    public setCoordenada(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    // Novas coordenadas X e Y 
    public setNewPoint(outroPonto: Ponto2D): void {
        this.x = outroPonto.getX();
        this.y = outroPonto.getY();
    }

    // Compara se os pontos são iguais 
    public equals(outroPonto: Ponto2D): boolean {
        if(outroPonto.getX() === this.x && outroPonto.getY() === this.y){
            return true 
        } else {
            return false 
        }
    }

    // Retorna o valor das coordenadas em string 
    public toString(): string {
        return `x: ${this.x}, y: ${this.y}`;
    }

    // Calcula a distância entre este ponto e outro ponto
    public distancia(outroPonto: Ponto2D): number {
        const dx = outroPonto.getX() - this.x; 
        // Valor do xRetorna - xDefinido
        // Valor inicial  0  - Novo valor que foi definido
        const dy = outroPonto.getY() - this.y; 
        const d = dx + dy
        return d; // Distância
    }

    // Cria uma cópia deste ponto
    public clone(): Ponto2D {
        let clone = new Ponto2D; // Copia o método coordenadas
        clone.x = this.x
        clone.y = this.y
        return clone
    }

}
//Aqui a gente define as coordenadas que queremos no plano cartesiano
export class PontoXY extends Ponto2D {
    constructor(x: number, y: number) {
        super(); 
        this.setCoordenada(x, y); // Define as coordenadas X e Y do ponto
    }
}
//Aqui a gente define as coordenadas com base com o valor do X e Y que foram definidos na class PontoXY
export class PontoEx extends Ponto2D {
    constructor(outroPonto: Ponto2D) {
        super(); // Chama o construtor da classe base
        this.setCoordenada(outroPonto.getX(), outroPonto.getY());
        // Define as coordenadas do ponto com base em outro ponto
    }
}


const ponto1 = new PontoXY(20, 35); // Um ponto com coordenadas (20, 35)
const ponto2 = new PontoEx(ponto1); // Um ponto com as mesmas coordenadas que ponto1

// Exibindo coordenadas
console.log(ponto1.toString()); //  x: 20, y: 35
console.log(ponto2.toString()); //  x: 20, y: 35

// Definindo novas coordenadas para ponto1
ponto1.setCoordenada(2, 5);
console.log(ponto1.toString()); //  x: 2, y: 5

// Verifica se são iguais 
console.log(ponto1.equals(ponto2)); //  false (porque ponto1 foi alterado)

// Calcula distância entre ponto1 e ponto2
const distancia = ponto1.distancia(ponto2);
console.log(`Distância: ${distancia}`); // Mostra a Distância entre os pontos

// Clonando ponto1
const pontoClone = ponto1.clone();
console.log(pontoClone); //  x: 2, y: 4

