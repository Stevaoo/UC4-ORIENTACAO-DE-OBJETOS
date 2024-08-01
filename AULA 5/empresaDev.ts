export class Junior {
    public ResolveBugs(): void{
        console.log(`Júnior resolvo bugs rsrsrs`);
    }
}

export class Pleno {
    public NewFeatures(): void{
        console.log(`Pleno novas Features Chegando tropa`);
    }
}

export class Senior {
    public Administra(): void{
        console.log(`Senior quem tem mais de 5 anos de xp???`);
    }
}


export  class EmpresaDev {
    // Membros é uma array
    public membos: (Junior | Pleno | Senior)[]

    constructor(){
        this.membos = []
    }


    public inserirProgamdor(empregado: (Junior | Pleno | Senior)): void{
        this.membos.push(empregado)
    }

    public CadeMeusEmpregados(): void{
        for( let empregado of this.membos){
            //
            if(empregado instanceof Junior){
                empregado.ResolveBugs()
            } else if (empregado instanceof Pleno){
                empregado.NewFeatures()
            } else if (empregado instanceof Senior)[
                empregado.Administra()
            ]
        }
    }
}
let um = new Junior();
let dois = new Pleno();
let tres = new Senior();

let dev = new EmpresaDev();
dev.inserirProgamdor(um);
dev.inserirProgamdor(dois);
dev.inserirProgamdor(tres);

dev.CadeMeusEmpregados();




