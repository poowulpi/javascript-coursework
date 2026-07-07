/* Part 1: AI-Assisted Code Generation */

{
    let numbers = [5, 10, 15, 20];
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    console.log("Total:", total);
}


/* Part 2: Find the bugs! */

// Snippet A
{
    let count = 5;

    while (count > 0) {
        console.log(count);
        count = count - 1;
    }

    console.log("Blast off!");
}

// Snippet B
{
    let score = 60;

    if (score >= 60) {
        console.log("pass");
    } else {
        console.log("fail");
    }
}

// Snippet C
{
    let numbers = [10, 20, 30, 40];
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    console.log("Total: " + total);
}


/* Part 3: Improve the code */

{
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
}


/* Part 4: Writing our own code */

// Problem 1: Is It Positive, Negative, or Zero?
{
    let num = 5;  // Test with different values: 5, -3, 0

    if (num > 0) {
        console.log("positive");
    } else if (num < 0) {
        console.log("negative");
    } else {
        console.log("zero");
    }
}

// Problem 2: Add Only Positive Numbers
{
    let numbers = [1, -2, 3, -4, 5];
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            total += numbers[i];
        }
    }

    console.log("Total of positive numbers: " + total);
}

// Problem 3: Print a Multiplication Table
{
    let num = 3;

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}