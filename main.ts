
import {ProductManager} from "./ProductManager";
import {Product} from "./Product";

const input = require('readline-sync')
let productManager = new ProductManager()

main();
function main(){
        let choice = -1;
        do {
            console.log(`
        1. List
        2. Manager
        0. Out
        `)
            choice = +input.question('Enter choice : ')
            switch (choice) {
                case 1:
                    show()
                    break;
                case 2:
                    manager()
                    break;
                case 0:
                    break;
            }
        } while (choice !== 0);
    }

function manager() {
    let choice = -1;
    do {
        console.log(" Manager");
        console.log(`
        1. Add
        2. Remove
        3. Edit
        4. Find
        5. Sort
        0. Out
        `)
        choice = +input.question('Enter choice : ')
        switch (choice) {
            case 1:
                add()
                break;
            case 2:
                remove()
                break;
            case 3:
                edit()
                break;
            case 4:
                find();
                break;
            case 5:
                sort()
                break;
            case 0:
                break;
        }
    } while (choice !== 0);
}

function show() {
    console.log("List")
    console.log(productManager.showList())
}

function add() {
    console.log(" Add");
    let name = input.question("Enter product name: ")
    let price = +input.question("Enter product price: ")
    let number = +input.question("Enter product number: ")
    let type = input.question("Enter product type: ")
    let product = new Product(name, price, number, type)
    productManager.addProduct(product)
    show();
}

function remove() {
    console.log(" Remove");
    let name = input.question("Enter product name: ");
    let find: Product[] = productManager.listProduct.slice().filter(obj => obj.name === name);
    if(find.length === 0){
        console.log("Can't find")
    } else {
        console.log(find)
        let choice;

         console.log(`Are you sure to remove ${find[0]}?
         1. Yes  2. No
         `)
         choice = +input.question('Enter choice : ')
         switch (choice) {
            case 1:
                productManager.removeProduct(name)
                break;
             case 2:
                 break;
         }
        }
}

function edit() {
    console.log(" Edit");
    let product = input.question("Enter product name: ");
    let find: Product[] = productManager.listProduct.slice().filter(obj => obj.name === product);
    if(find.length === 0){
        console.log("Can't find")
    } else {
        console.log(find)
        console.log("New product: ")
        let name = input.question("Enter product name: ")
        let price = +input.question("Enter product price: ")
        let number = +input.question("Enter product number: ")
        let type = input.question("Enter product type: ")
        let newProduct: Product = new Product(name, price, number, type)

        let choice;
        console.log(`Are you sure to edit ${find[0]} with ${newProduct} ?
         1. Yes  2. No
         `)
            choice = +input.question('Enter choice : ')
            switch (choice) {
                case 1:
                    productManager.editProduct(product, newProduct)
                    break;
                case 2:
                    break;
            }
        }
}

function find() {
    let choice = -1;
    do {
        console.log(`
        1. Find by name
        2. Find by price
        3. Find by type
        0. Out
        `)
        choice = +input.question('Enter choice : ')
        switch (choice) {
            case 1:
                findByName()
                break;
            case 2:
                findByPrice()
                break;
            case 3:
                findByType()
                break
            case 0:
                break;
        }
    } while (choice !== 0);
}

function findByName() {
    console.log(" Find by product name ");
    let name = input.question("Enter product name: ")
    let find = productManager.findName(name)
    find.length === 0? console.log("Can't find"): console.log(find)
}

function findByType() {
    console.log(" Find by product type ");
    let type = input.question("Enter product type: ")
    let find = productManager.findType(type)
    find.length === 0? console.log("Can't find"): console.log(find) ;
}

function findByPrice() {
    console.log(" Find by product price ");
    let min = +input.question("Enter minimum price: ")
    let max = +input.question("Enter maximum price: ")
    let find = productManager.findPrice(min,max)
    find.length === 0? console.log("Can't find"): console.log(find)
}

function sort() {
    let choice = -1;
    do {
        console.log(`
        1. Sort by price ascending
        2. Sort by price descending
        3. Sort by number descending
        0. Out
        `)
        choice = +input.question('Enter choice : ')
        switch (choice) {
            case 1:
                sortByPriceAsc()
                break;
            case 2:
                sortByPriceDesc()
                break;
            case 3:
                sortByNumberDesc()
                break
            case 0:
                break;
        }
    } while (choice !== 0);
}

function sortByPriceAsc() {
    console.log(" Sort by price ascending ");
    let sort = productManager.sortPriceAsc()
    console.log(sort)
}

function sortByPriceDesc() {
    console.log(" Sort by price descending ");
    let sort = productManager.sortPriceDesc()
    console.log(sort)
}

function sortByNumberDesc() {
    console.log(" Sort by number descending ");
    let sort = productManager.sortNumberDesc()
    console.log(sort)
}
