// Problem 3: Constructor Functions and Prototypes

function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getSummary = function() {
    return this.title + " by " + this.author;
};

Book.prototype.rate = function(score) {
    if (score >= 1 && score <= 5) {
        this.rating = score;
    }
};

Book.prototype.getRating = function() {
    if (this.rating === undefined) {
        return "Not rated";
    }

    return this.rating;
};


// Test Book constructor

let book1 = new Book("1984", "George Orwell");
let book2 = new Book("Dune", "Frank Herbert");

console.log(book1.getSummary());
console.log(book1.getRating());

book1.rate(5);

console.log(book1.getRating());
console.log(book2.getRating());

console.log(book1.hasOwnProperty("title"));
console.log(book1.hasOwnProperty("getSummary"));


// Part B: Prototype Chain Exploration

console.log(Book.prototype);

console.log(Book.prototype.constructor === Book);

console.log(
    Object.getPrototypeOf(Book.prototype) === Object.prototype
);

console.log(typeof book1.toString);

/*
JavaScript first looks for toString() directly on book1. When it does not find
the method there, it checks Book.prototype and then continues up the prototype
chain to Object.prototype, where the toString() method is defined.
*/