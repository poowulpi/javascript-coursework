// Part 2, Snippet A

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hi, I'm " + this.name + " and I'm " + this.age + " years old.";
    }
}

let person1 = new Person("Alice", 25);

console.log(person1.greet());


// Part 2, Snippet B

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2024,

    getInfo() {
        return "This car is a " + this.year + " " + this.make + " " + this.model;
    }
};

console.log(car.getInfo());


// Part 2, Snippet C

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hello, I'm " + this.name;
    }
}

class Student2 extends Person2 {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    describe() {
        return this.greet() + " and I study " + this.major;
    }
}

let s = new Student2("Bob", 20, "Computer Science");

console.log(s.describe());


// Part 2, Snippet D

function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}

Dog.prototype.speak = function () {
    return this.name + " says Woof!";
};

let myDog = new Dog("Buddy", "Golden Retriever");

console.log(myDog.speak());