// TASK 1 Primitive data types in JavaScript

let age = 31;
let fullName = "Katie Jean";
let isEnrolled = true;
let futureGoal;
let completedCourse = null;

console.log("Age:", age, "| Type:", typeof age);
console.log("Name:", fullName, "| Type:", typeof fullName);
console.log("Enrolled:", isEnrolled, "| Type:", typeof isEnrolled);
console.log("Future Goals:", futureGoal, "| Type:", typeof futureGoal);
console.log("Completed Course:", completedCourse, "| Type:", typeof completedCourse);

/*
I learned that undefined means a variable has been declared but a value has not been given yet.
Null is used when I WANT a variable to have no value.
Undefined happens automatically, while null is a value that I assign myself.
*/

/* TASK 2 Type conversion and operations */

const ageAsString = String(age);
console.log(`Original: ${age} (${typeof age}) → Converted: ${ageAsString} (${typeof ageAsString})`);

const nameAsBoolean = Boolean(fullName);
console.log(`Original: ${fullName} (${typeof fullName}) → Converted: ${nameAsBoolean} (${typeof nameAsBoolean})`);

const enrolledAsNumber = Number(isEnrolled);
console.log(`Original: ${isEnrolled} (${typeof isEnrolled}) → Converted: ${enrolledAsNumber} (${typeof enrolledAsNumber})`);

const completedCourseAsNumber = Number(completedCourse);
console.log(`Original: ${completedCourse} (${typeof completedCourse}) → Converted: ${completedCourseAsNumber} (${typeof completedCourseAsNumber})`);

/* Task 2.2

What value did you get?
    null returns 0
Why does JavaScript return this value?
    null is treated as an empty or nonexistent numeric calue when converted to a number. This comes from JavaScript's type conversion rules.
*/

/* Ask an AI assistant

Type coercion is when JavaScript automatically converts one data type into another during an operation.

Devs consider it dangerous because it can create unexpected results and hard to find bugs.

Examples include: 
console.log("5" + 1); // "51"
console.log ("5" - 1); // 4

In the top example, JavaScript converts the number to a string and concatenates it.
In the bottom example, JavaScript converts the string to a number and performs subtraction.

Inconsistency leads to bugs! 

*/

/* TASK 3 Arithmetic */

let x = 2
let y = 4

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);

/* Divide by zero */

console.log("Divide x by zero:", x / 0);
console.log("Divide zero by zero:", 0 / 0);

/* I wanted to test out two versions of dividing by zero, and I got two outputs:
Divide x by zero returned Infinite
Divide zero by zero returned NaN
*/

/* TASK 3.2 */

let hasCompletedAssignment = true;

console.log("Enrolled AND Completed Assignment:", isEnrolled && hasCompletedAssignment);
console.log("Enrolled OR Completed Assignment:", isEnrolled || hasCompletedAssignment);
console.log("NOT Enrolled:", !isEnrolled);
console.log("NOT Completed Assignment:", !hasCompletedAssignment);