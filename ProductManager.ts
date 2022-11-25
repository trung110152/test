import {Product} from "./Product";

export class ProductManager {
    listProduct: Product[] = [];

    addProduct(product: Product): void{
        this.listProduct.push(product)
    }

    showList(): Product[]{
        return this.listProduct
    }

    findName(name: string): Product[]{
        return this.listProduct.filter(obj => obj.name.includes(name) )
    }

    findType(type: string): Product[]{
        return this.listProduct.filter(obj => obj.type.includes(type) )
    }

    findPrice(min: number, max: number):Product[]{
        return this.listProduct.filter(obj => (min <=obj.price && obj.price< max) )
    }

    sortPriceAsc(): Product[]{
        return this.listProduct.slice().sort((p1,p2) => p1.price - p2.price)
    }

    sortPriceDesc(): Product[]{
        return this.listProduct.slice().sort((p1,p2) => p2.price - p1.price)
    }

    sortNumberDesc(): Product[]{
        return this.listProduct.slice().sort((p1,p2) => p2.number - p1.number)
    }

    removeProduct(name: string): void {
        let a = this.listProduct.filter(obj => obj.name == name)
        let index = this.listProduct.indexOf(a[0])
        this.listProduct.splice(index,1)
    }

    editProduct(name: string, newProduct: Product){
        let a = this.listProduct.filter(obj => obj.name == name)
        let index = this.listProduct.indexOf(a[0])
        this.listProduct[index] = newProduct
    }
}