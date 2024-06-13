
var leitor = require('readline-sync')
class Carro{
    motor: number
    rodas: number
    marca: string
    cor: string
    gasolina: string

    constructor(motor: number, rodas: number, marca: string, cor: string, gasolina: string){
        this.motor = motor // this ele representa o obj
        this.rodas = rodas
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
    }

    dirigir(){
        console.log(`Estou dirigindo minha ${this.marca}`);
    }
    foto(){
        console.log(`Tirando foto da minha ${this.marca}`);
    }
    limpando(){
        console.log(`Limpando minha ${this.marca}`);
    }
    velocidade(){
        console.log(`Minha ${this.marca}, pegou 300km`);
    }
}

const newcar = new Carro(1.6,15,'BMW','Azul','60L')
const cartwo = new Carro(3.2,17,"Toyota",'Preto','50L')
const carthree = new Carro(1.0,15,'Mercedes','Branco','90L')


const marcaDeCarro = leitor.question("Qual a marca do carro?")
const marca = new Carro(1.8,17,marcaDeCarro,"Branca","70L")
console.log(marca);


/*
let main = true

while(main){
    const opecao: number = leitor.questionInt("1- Dirigir, 2- Para tirar foto, 3- limpar carro, 4- velocidade, 5- sair")

    switch(opecao){
        case 1:
            newcar.dirigir
            break;
        case 2:
            newcar.foto
            break
        case 3:
            newcar.limpando
            break;
        case 4:
            newcar.velocidade
            break;
            default:
                console.log('Saindo...');
                main = false
    }
}
*/

/*
console.log(newcar);
newcar.dirigir()
newcar.foto()
newcar.limpando()
newcar.velocidade()
console.log(cartwo);
cartwo.dirigir()
cartwo.foto()
cartwo.limpando()
cartwo.velocidade()
console.log(carthree);
carthree.dirigir()
carthree.foto()
carthree.limpando()
carthree.velocidade()
*/





