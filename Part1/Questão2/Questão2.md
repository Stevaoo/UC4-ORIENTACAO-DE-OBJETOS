### Questão 2 - Calendário Mágico

Escreva uma classe Data cuja instância (objeto) represente uma data mágica. Esta
classe deverá dispor dos seguintes métodos:

/*### Questão 2 - Calendário Mágico

Escreva uma classe Data cuja instância (objeto) represente uma data mágica. Esta
classe deverá dispor dos seguintes métodos:

typescript
interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): number;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): string;
    getAno(): number;
    isBissexto(): boolean;
    clone(): Data;
}
*/

import { Idata } from "./interface"

class Data implements Idata{
    dia: number
    mes: number
    ano: number
    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
    comparar(outraData: Data): void{
        if(outraData === novaData){
            console.log('As datas são iguas')
        }
        else{
            console.log('As datas são diferentes')
        }
    }

    getDia(): number{
        return this.dia
    }

    getMes(): number{
        return this.mes
    }

    getAno(): number{
        return this.ano
    }
    
    getMesExtenso(): string {
        const meses: string[] = [ // array para os meses em extensão
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        return meses[this.mes - 1]; // Faço uma logica para retornar a minha array(Janeiro) sendo o indice 1 janeiro entao eu Faço menos 1  
    }
    isBissexto(): boolean {
        if (this.ano % 4 === 0) {
            if (this.ano % 100 === 0) {
                return this.ano % 400 === 0;
            }
            return true;
        }
        return false;
    }
    
    clone(): void{
        const a =  new Data(this.dia, this.mes, this.ano);
        console.log(a);
        
    }
}
/*
let novaData = new Data('22/04/2020', '17/03/2018)
let outraData = new Data ('03/07/2002', '04/05/03')*/
