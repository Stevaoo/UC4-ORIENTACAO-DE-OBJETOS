let leitora = require('readline-sync')

class Prof{
    nome: string
    idade: number
    ano_xp: number

    constructor(nome: string, idade: number, ano_xp: number){
        this.nome = nome
        this.idade = idade
        this.ano_xp = ano_xp
    }
}

class Escola{
    professor: Prof
    nome_esc: string
    end_esc: string
    num_esc: number

    constructor(professor: Prof, nome_esc: string, end_esc: string, num_esc: number){
        this.professor = professor
        this.nome_esc = nome_esc
        this.end_esc= end_esc
        this.num_esc = num_esc
    }

    
getProf(){
    console.log(`O nome do Professor é ${this.professor.nome}, sua idade é ${this.professor.idade}, anos de XP é ${this.professor.ano_xp}`);
}

getEsc(){
    console.log(`O nome da Escola é ${this.nome_esc}, endereco da escola é ${this.end_esc}, numero ${this.num_esc}`);
    
}

setProf(){
    let nomeUp = leitora.question("Qual o nome do Professor? ")
    let idadeUp = leitora.question("Qual é a idade do Professor? ")
    let ano_xpUp = leitora.question("Quantos anos de XP o Professor tem? ")
    this.professor.nome = nomeUp
    this.professor.nome = idadeUp
    this.professor.nome = ano_xpUp
}

setEscola(){
        let nomeUp = leitora.question("Qual o nome do Professor? ")
        let endUp = leitora.question("Qual é a idade do Professor? ")
        let num_xpUp = leitora.question("Quantos anos de XP o Professor tem? ")
        this.nome_esc = nomeUp
        this.end_esc = endUp
        this.num_esc = num_xpUp
    }
}

function main() {
    const readline = ('readline-sync');

    let escola: Escola | null = null;
    let professor: Prof | null = null;

    while(true) {
        console.log("\n===MENU===");
        console.log("1. Criar Professor");
        console.log("2. Criar Escola");
        console.log("3. Modoficar Professor");
        console.log("4. Modoficar Escola");
        console.log("5. Vizualizar Professor");
        console.log("6. Vizualizar Escola");

    }
}