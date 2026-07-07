// main.js

// Import your taskUtils module
const taskUtils = require("./taskUtils");


// Use the imported functions to:

// 1. Create two new tasks
const groceryTask = taskUtils.createTask("Buy groceries");
const callMomTask = taskUtils.createTask("Call mom");


// 2. Put them in an array and find one by its id
const tasks = [groceryTask, callMomTask];

console.log(taskUtils.findTaskById(tasks, groceryTask.id));


// 3. Count tasks by status
console.log(taskUtils.countByStatus(tasks));