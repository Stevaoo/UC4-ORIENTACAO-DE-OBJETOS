import { Icarro } from "./interfaces";
import { leitor } from "./cliente";

export class Carro implements Icarro {
    veiculo: string;
    consumoCombustivel: number; // km/L
    quantidadeCombustivel: number; // em litros

    constructor(veiculo: string, consumoCombustivel: number) {
        this.veiculo = veiculo
        this.consumoCombustivel = consumoCombustivel;
        this.quantidadeCombustivel = 0; // inicialmente vazio
    }

    //Primeiro adiciona o combustivel no caso a quantidade que o carro vai ter de litros 
    adicionarCombustivel(quantidade: number): void {
        this.quantidadeCombustivel += quantidade;
    }
    //Diz a respeito de quantos KM por distancia 
    andar(distancia: number): void {
        const combustivelNecessario = distancia / this.consumoCombustivel;
        if (combustivelNecessario <= this.quantidadeCombustivel) {
            this.quantidadeCombustivel -= combustivelNecessario;
            console.log(`Carro andou ${distancia} km.`);
        } else {
            console.log("Não há combustível suficiente para percorrer essa distância.");
        }
    }
    // Retorna o quanto de combustivel sobrou
    obterCombustivel(): number {
        return this.quantidadeCombustivel;
    }
}

// Exemplo de uso:
let meuCarro = new Carro("Fusca", 10); // consumo de 10 km/L

meuCarro.adicionarCombustivel(50); // adiciona 50 litros de combustível

console.log(`Combustível disponível: ${meuCarro.obterCombustivel()} litros`);

meuCarro.andar(150);
console.log(`Combustível restante: ${meuCarro.obterCombustivel()} litros`);

meuCarro.andar(200);
console.log(`Combustível restante: ${meuCarro.obterCombustivel()} litros`);


/*
let carro1 = new Carro("Fusca", "Volkswagen", 1986, "Gasolina", 120000)
let carro2 = new Carro("Uno", "Fiat", 2001, "Álcool", 150000)
let carro3 = new Carro("Civic", "Honda", 2024, "Gasolina", 0)
let carro4 = new Carro("Corolla", "Toyta", 2015, "Flex", 60000)
let carro5 = new Carro("EcoSport", "Ford", 2012, "Diesel", 900000)
let carro6 = new Carro("Onix", "Chevrolet", 2019, "Flex", 30000)
let carro7 = new Carro("Sandero", "Renault", 2017, "Gasolina", 45000)
let carro8 = new Carro("Aventador", "Lamborghini", 2020, "Gasolina", 12000)
let carro9 = new Carro("488 GTB", "Ferrari", 2018, "Gasolina", 20000)
let carro10 = new Carro("Regera", "Koenigsegg", 2027, "Híbrido", 0)

for(let i = 0; i < 10; i++){
    setGaragem(i);
}
*/
