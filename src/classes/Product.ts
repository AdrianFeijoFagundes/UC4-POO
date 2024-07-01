export class Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    finalPrice: number;
    category: string;
    stockAmount : number;
    
    constructor(id: number, name: string, brand: string, price: number, finalPrice: number, stockAmount: number, category: string) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.finalPrice = finalPrice;
        this.stockAmount = stockAmount;
        this.category = category;
    }

    getProduct(): string {
        // return `\n Ficha ${this.name}\n ------------\n id: ${this.id}\n Marca: ${this.brand}\n Preço: ${this.price}\n Preço Final: ${this.finalPrice}\n Categoria: ${this.category}\n Quantidade no Estoque: ${this.stockAmount}`
         return `${this.id} - ${this.name} - ${this.brand}\n   R$${this.finalPrice}\n   Quantidade: ${this.stockAmount}`
    }

    setProduct(name: string, brand: string, price: number, finalPrice: number, category: string, stockAmount: number): void {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.finalPrice = finalPrice;
        this.stockAmount = stockAmount;
        this.category = category;
    }

    calcProfit(): number {
        return this.finalPrice - this.price;
    }

}