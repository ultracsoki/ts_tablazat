export class Product{
    name : string;
    price : number;
    productCode : string;

    constructor(name: string,price:number,productCode: string)
    {
        if(name.trim() == ""){
            throw new Error("A név nem lehet üres.");
        } else if(price <= 100){
            throw new Error("Az árnak többnek kell lennie mint 100.")
        } else if(productCode.length != 11){
            throw new Error("A termék kódjának 11 karakternek kell lennie.")
        }else{
            this.name = name;
            this.price = price;
            this.productCode = productCode;
        }
    }
}