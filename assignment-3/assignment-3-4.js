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

