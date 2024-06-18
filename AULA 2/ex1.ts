// class PAI (pessoa) abstração -> O MODELO 
class pessoa {
    nome: string
    idade: number
    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }
    cumprimentar(): void{
        console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
        
    }
}

// Outras class são a herança que copiam o modelo podendo adiconar mais.
let novapessoa = new pessoa("luiz",28)
        novapessoa.cumprimentar()

        class crinca extends pessoa{
            cumprimentar(): void {
                console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
            }
        }
        class idoso extends pessoa{
            cumprimentar(): void {
                console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
            }
        }
        // Hierarquia do obj, isso é Herança.
        class adulto extends pessoa{
            cumprimentar(): void {
                console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
            }
        }

        let pessoaNew = new pessoa('Stevão',18)
        let crincaNew = new crinca("Arthur",8)
        let idosoNew = new idoso('Jorge',98)
        let adultoNew = new adulto('Paulo',40)

        pessoaNew.cumprimentar()
        crincaNew.cumprimentar()
        idosoNew.cumprimentar()
        adultoNew.cumprimentar()