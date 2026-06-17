/* Part 1: AI-Assisted Code Generation */

let numbers = [5, 10, 15, 20];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

console.log("Total:", total);


/* Part 2: Find the bugs! */

// Snippet A

let count = 5;

while (count > 0) {
    console.log(count);
    count = count - 1;
}

console.log("Blast off!");

// Snippet B

let score = 60;

if (score >= 60) {
    console.log("pass");
} else {
    console.log("fail");
}

// Snippet C

let numbers = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}

console.log("Total: " + total);

/* Part 3: Improve the code */

const score = 85;
let grade = "";

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(grade);

/* Part 4: Writing our own code */

// Problem 1: Is It Positive, Negative, or Zero? 

let num = 5;  // Test with different values: 5, -3, 0

// Write an if/else if/else statement that:
// - Prints "positive" if num is greater than 0
// - Prints "negative" if num is less than 0
// - Prints "zero" if num equals 0

// Your code here:

let num = 5;  // Test with different values: 5, -3, 0

if (num > 0) {
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

// Problem 2: Add Only Positive Numbers

let numbers = [1, -2, 3, -4, 5];
let total = 0;

// Use a loop to go through each number in the array
// If the number is positive (greater than 0), add it to total
// Skip negative numbers and zero

// Your code here:
let numbers = [1, -2, 3, -4, 5];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    // Only add positive numbers
    if (numbers[i] > 0) {
        total += numbers[i];
    }
}

// Print the total
// Expected output: 9 (because 1 + 3 + 5 = 9)
console.log("Total of positive numbers: " + total);


// Problem 3: Print a Multiplication Table

let num = 3;

// Use a for loop that counts from 1 to 10
// Each time through the loop, print: num x counter = result
// For example, if num is 3:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// ... and so on up to 3 x 10 = 30

// Your code here:

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}