class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    isSquare() {
        return this.width === this.height;
    }
}

// Test the class
const rect1 = new Rectangle(8, 5);
const rect2 = new Rectangle(6, 6);

console.log("Rectangle 1");
console.log("Area:", rect1.getArea());
console.log("Perimeter:", rect1.getPerimeter());
console.log("Is Square?", rect1.isSquare());

console.log("");

console.log("Rectangle 2");
console.log("Area:", rect2.getArea());
console.log("Perimeter:", rect2.getPerimeter());
console.log("Is Square?", rect2.isSquare());