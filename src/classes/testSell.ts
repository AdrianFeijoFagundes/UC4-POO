import { Product } from "./Product";

export class TestSell {
    id: number;
    clientName: string;
    product: Product;
    amout: number;
    total: number;
    finalPrice: number;
    date: string;
    discount: boolean;
    discountValue: number;
    discountPercentage: number;
    totalDiscount: number;
    paymentMethod: "PIX" | "Crédito" | "Débito" | "Boleto" | "";
    paymentType: "A vista" | "Parcelado" | "";
    installmentsAmout: number;
    installmentsValue: number;

    constructor(id: number, clientName: string, product: Product, amout: number, date: string) {
        this.id = id
        this.clientName = clientName;
        this.product = product;
        this.date = date;

        this.amout = amout;
        this.paymentMethod = "";
        this.paymentType = "";
        
        this.discount = false;
        this.discountValue = 0;
        this.discountPercentage = 0;
        this.totalDiscount = 0
        this.installmentsAmout = 0;
        this.installmentsValue = 0;

        this.total = this.product.finalPrice * this.amout;
        this.finalPrice = this.total - this.totalDiscount;
    }
    calcTotal(): number {
        return this.product.finalPrice * this.amout;
    }
    calcDiscont(): number { 
        this.totalDiscount = 0;

        if (this.discount) {
            this.totalDiscount = (this.calcTotal() / 100 ) * this.discountPercentage;
            this.totalDiscount += this.discountValue;  
            
            return this.totalDiscount;
        }
        console.log("Não foi aplicado nenhum desconto");
        return 0;
    }
    calcFinalPrice() : number {
        if (this.total < this.totalDiscount) {
            console.log("O desconto total não pode ser maior que o valor final da Venda")
            console.log("Insira valores válidos")
            return 0
        }
        return this.total - this.totalDiscount
    }
    calcProfit(): number {
        return this.finalPrice - (this.product.price * this.amout);
    }
    getSell(): string {
        return `\n Venda ${this.id}\n ------------ \n Id: ${this.id}\n Cliente: ${this.clientName}\n Data da venda: ${this.date}\n Produto vendido: ${this.product.name}\n Quantidade: ${this.amout}\n Total sem descontos: ${this.total}\n Valor do Desconto: ${this.totalDiscount}\n Preço Final: ${this.finalPrice}`
    }
    setDiscount(discount: boolean, discountValue: number, discountPercentage: number): void {
        this.discount = discount;
        this.discountValue = discountValue;
        this.discountPercentage = discountPercentage;
        this.totalDiscount = this.calcDiscont();
        this.total = this.calcTotal();
        this.finalPrice = this.calcFinalPrice();
    }
}