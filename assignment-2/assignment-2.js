/* Part 1: AI-Assisted Code Generation */

let numbers = [5, 10, 15, 20];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

console.log("Total:", total);

/*
What does the code do step by step?
    The code adds all the numbers in the array together and prints the total
        1. Create an array of numbers
        2. Creates a TOTAL variable starting at 0
        3. It uses a FOR LOOP to go through each number in the array
        4. Each number gets added to TOTAL
        5. After the loop finishes, it prints the final total

What type of loop does the code use?
    The code uses a "for" loop

What would happen if the array was empty?
    If the array was empty, the loop wouldn't run, so TOTAL would stay 0 and the output would be 0

*/

/* Part 2: Find the bugs! */

/* Snippet A

Bug:
The loop condition is count >= 0, which causes the code to print 0
The expected output only includes numbers from 5 down to 1 before printing "Blast off!"
*/

let count = 5;

while (count > 0) {
    console.log(count);
    count = count - 1;
}

console.log("Blast off!");

/* Snippet B

Bug: 
The condition uses score > 60, which does not include a score of exactly 60
Since the instructions say 60 or above should pass, the condition should use >=
*/

let score = 60;

if (score >= 60) {
    console.log("pass");
} else {
    console.log("fail");
}

/* Snippet C

Bug: 
The loop uses i <= numbers.length, which causes it to try to access numbers[4]
Since the valid indexes are 0, 1, 2, and 3, numbers[4] is undefined, which causes the total to become NaN
*/

let numbers = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}

console.log("Total: " + total);