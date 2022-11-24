import {Product} from "./Product";

export class ProductManager {
    listProduct: Product[] = [];

    addProduct(product: Product): void{
        this.listProduct.push(product)
    }

   showList(): Product[]{
        return this.listProduct
    }

    findName(name: string):Product[]{
        return this.listProduct.slice().filter(obj => obj.name.includes(name) )
    }

    findType(type: string):Product[]{
        return this.listProduct.slice().filter(obj => obj.name.includes(type) )
    }

    findPrice(number1: number, number2: number):Product[]{
        return this.listProduct.slice().filter(obj => (number1 <=obj.price && obj.price< number2) )
    }

    sortPriceSlow(){
        return this.listProduct.sort((p1,p2) => p1.price - p2.price)
    }

    sortPriceHeight(){
        return this.listProduct.sort((p1,p2) => p2.price - p1.price)
    }

    sortNumberHeight(){
        return this.listProduct.sort((p1,p2) => p2.number - p1.number)
    }

    remove(name: string): void {

    }
}