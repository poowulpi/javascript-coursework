// Problem 2: Inheritance and Shapes

class Shape {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    describe() {
        return "A " + this.color + " shape";
    }

    getArea() {
        return 0;
    }
}


class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    describe() {
        return "A " + this.color + " circle with radius " + this.radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}


class Triangle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }

    describe() {
        return (
            "A " +
            this.color +
            " triangle with base " +
            this.base +
            " and height " +
            this.height
        );
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }
}


// Test shapes

let shapes = [
    new Circle("red", 5),
    new Triangle("blue", 10, 6),
    new Circle("green", 3),
    new Triangle("yellow", 8, 4)
];

for (let shape of shapes) {
    console.log(shape.describe());
    console.log("  Area: " + shape.getArea().toFixed(2));
    console.log("  Color: " + shape.getColor());
    console.log("  Is it a Circle? " + (shape instanceof Circle));
}