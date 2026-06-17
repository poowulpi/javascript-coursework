/* Part 1: AI-Assisted Code Generation */

// Add up all the numbers in an array and print the total

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