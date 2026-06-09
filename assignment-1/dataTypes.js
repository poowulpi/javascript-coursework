// Primitive data types in JavaScript

let age = 31;
let fullName = "Katie Jean";
let isEnrolled = true;
let futureGoal;
let completedCourse = null;

console.log("Age:", age, "| Type:", typeof age);
console.log("Name:", fullName, "| Type:", typeof fullName);
console.log("Enrolled:", isEnrolled, "|Type:", typeof isEnrolled);
console.log("Future Goals:", futureGoal, "| Type:", typeof futureGoal);
console.log("Completed Course:", completedCourse, "| Type:", typeof completedCourse);

/*
I learned that undefined means a variable has been declared but a value has not been given yet.
Null is used when I WANT a variable to have no value.
Undefined happens automatically, while null is a value that I assign myself.
*/

/* Part 2 - type conversion and operations */

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

