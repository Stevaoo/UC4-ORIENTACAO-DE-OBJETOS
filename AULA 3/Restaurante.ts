class chef{
    nome: string
    idade: number
    ano_xp: number

    constructor(nome: string, idade: number, ano_xp: number){
        this.nome = nome
        this.idade = idade
        this.ano_xp = ano_xp
    }
}

class restaurante{
    chef: chef
    nome_res: string
    end_res: string
    num_res: number

    constructor(chef: chef, nome_res: string, end_res: string, num_res: number){
        this.chef = chef
        this.nome_res = nome_res
        this.end_res = end_res
        this.num_res = num_res
    }

    apresentacaoRest(): void{
        console.log(`Olá, somos o restaurante ${this.nome_res} e sou o chef ${this.chef.nome}`);
        
    }
}

let cozinheiro = new chef("Tevinho",65,29)

let restaurante = new Restaurante(cozinheiro, "Prato Fino", "Rua Brasil",199)

restaurante.apresentacaoRest();
console.log(restaurante);

