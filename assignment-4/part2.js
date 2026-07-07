// Snippet A: Missing Return
// Bug: The function uses console.log instead of return, so biggest becomes undefined.

function findMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let biggest = findMax(10, 5);
console.log("The biggest number is: " + biggest);


// Snippet B: Parameter Problem
// Bug: The parameter is named name, but the function tries to use userName.

function greetUser(name) {
    return "Hello, " + name + "! Welcome back.";
}

console.log(greetUser("Alice"));


// Snippet C: Module Export Issue
// Bug: Only add is being exported, so multiply cannot be used in main.js.

// mathUtils.js
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = { add, multiply };


// Snippet D: Closure Gone Wrong
// Bug: createCounter returns count instead of returning the increment function.

function createCounter() {
    let count = 0;

    function increment() {
        count = count + 1;
        return count;
    }

    return increment;
}

let myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3