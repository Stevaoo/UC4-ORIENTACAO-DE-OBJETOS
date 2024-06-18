// Sistema de Biblioteca

class Item {
    id: number;
    title: string;
    author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    getInfo(): void {
        console.log(`ID do item é ${this.id}, título é ${this.title}, e o Autor é ${this.author}`);
    }
}

var itemNew = new Item(144, 'A Cultura do Jejum', 'Luciano Subirá');
console.log(itemNew);
itemNew.getInfo();

class Book extends Item {
    numPages: number; 

    constructor(id: number, title: string, author: string, numPages: number) {
        super(id, title, author); // Chama o construtor da classe base com os parâmetros corretos
        this.numPages = numPages; // Inicializa a nova propriedade
    }

    getInfo(): void {
        console.log(`ID do item é ${this.id}, título é ${this.title}, e o Autor é ${this.author}; número da páginas ${this.numPages}`);
    }
}

var bookNew = new Book(244, 'Atos', 'Apóstolo Paulo', 17);
console.log(bookNew);
bookNew.getInfo();
