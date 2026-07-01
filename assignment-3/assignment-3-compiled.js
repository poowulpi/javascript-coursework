/* ASSIGNMENT 3-1 */

// Create an array of five book objects
const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310
  },
  {
    title: "Charlotte's Web",
    author: "E.B. White",
    pages: 192
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    pages: 309
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281
  }
];

// Loop through the array and print books with more than 200 pages
for (let i = 0; i < books.length; i++) {
  if (books[i].pages > 200) {
    console.log(
      books[i].title +
      " by " +
      books[i].author +
      " (" +
      books[i].pages +
      " pages)"
    );
  }
}

/* ASSIGNMENT 3-3 */

// Array of user objects
const users = [
    { name: "Alice", email: "alice@email.com", active: true },
    { name: "Bob", email: "bob@email.com", active: false },
    { name: "Charlie", email: "charlie@email.com", active: true }
];

// Store the names of active users
const activeUserNames = [];

// Loop through each user and add active users' names to the array
for (let i = 0; i < users.length; i++) {
    if (users[i].active === true) {
        activeUserNames.push(users[i].name);
    }
}

// Display the list of active user names
console.log(activeUserNames);

/* ASSIGNMENT 3-4 */

/* Problem 1: Is It Positive, Negative, or Zero? */

let num = 5; // Test with different values: 5, -3, 0

if (num > 0) {
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

/* POSITIVE! */

/* Problem 2: Add Only Positive Numbers */

let numbers = [1, -2, 3, -4, 5];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        total += numbers[i];
    }
}

console.log("Total of positive numbers: " + total);

/* Total of positive numbers: 9 */

/* Problem 3: Print a Multiplication Table */

let multiplicationTable = 3;

for (let i = 1; i <= 10; i++) {
    console.log(multiplicationTable + " x " + i + " = " + (multiplicationTable * i));
}

