// Part 3

class Product {
    constructor(name, price, discountPercent) {
        this.name = name;
        this.price = price;
        this.discountPercent = discountPercent;
    }

    // Calculates the sale price after the discount.
    getSalePrice() {
        return this.price * (1 - this.discountPercent / 100);
    }

    // Returns product information as a string.
    getInfo() {
        return this.name + ": $" + this.price + " (" + this.discountPercent + "% off)";
    }

    // Returns a formatted string when the object is printed.
    toString() {
        return this.getInfo();
    }
}

const item1 = new Product("Laptop", 999.99, 10);
const item2 = new Product("Mouse", 29.99, 0);
const item3 = new Product("Keyboard", 79.99, 25);

console.log(item1.toString());
console.log("Sale price: $" + item1.getSalePrice().toFixed(2));

console.log(item2.toString());
console.log("Sale price: $" + item2.getSalePrice().toFixed(2));

console.log(item3.toString());
console.log("Sale price: $" + item3.getSalePrice().toFixed(2));