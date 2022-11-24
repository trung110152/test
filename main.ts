
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
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
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
    let name = input.question("Enter name")
    let price = input.question("Enter price")
    let number = input.question("Enter number")
    let type = input.question("Enter type")
    let product = new Product(name, price, number, type)
    productManager.addProduct(product)
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
                break;
            case 2:
                break;
            case 3:
                break
            case 0:
                break;
        }
    } while (choice !== 0);
}

function findName() {
    console.log(" Find by name ");
    let name = input.question("Enter name")

}