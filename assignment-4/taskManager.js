// Create a function called createTaskManager
// It should return an OBJECT with these methods:
//   - addTask(description): creates a new task and adds it to the list, returns the new task
//   - completeTask(id): marks a task as completed, returns true if found, false if not
//   - removeTask(id): removes a task from the list, returns true if found, false if not
//   - getPendingTasks(): returns an array of all incomplete tasks
//   - getCompletedTasks(): returns an array of all completed tasks
//   - getAllTasks(): returns an array of all tasks

function createTaskManager() {
    // Create a private array to hold tasks (this will be "closed over")
    // Each task should be an object with: id, description, completed
    
    let tasks = [];

    // Return an object with all the methods listed above
    // Each method can access and modify the private tasks array
    
    return {
        addTask: function(description) {
            const task = {
                id: Date.now(),
                description: description,
                completed: false
            };

            tasks.push(task);
            return task;
        },

        completeTask: function(id) {
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].id === id) {
                    tasks[i].completed = true;
                    return true;
                }
            }

            return false;
        },

        removeTask: function(id) {
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].id === id) {
                    tasks.splice(i, 1);
                    return true;
                }
            }

            return false;
        },

        getPendingTasks: function() {
            return tasks.filter(function(task) {
                return !task.completed;
            });
        },

        getCompletedTasks: function() {
            return tasks.filter(function(task) {
                return task.completed;
            });
        },

        getAllTasks: function() {
            return tasks;
        }
    };
}

// Test:
let myTasks = createTaskManager();

// Add some tasks
let task1 = myTasks.addTask("Learn JavaScript");
let task2 = myTasks.addTask("Build a project");
let task3 = myTasks.addTask("Take a break");

console.log(myTasks.getAllTasks().length);  // Should print: 3

// Complete a task
console.log(myTasks.completeTask(task1.id));  // Should print: true
console.log(myTasks.completeTask(999));       // Should print: false (id doesn't exist)

// Check pending vs completed
console.log(myTasks.getPendingTasks().length);    // Should print: 2
console.log(myTasks.getCompletedTasks().length);  // Should print: 1

// Remove a task
console.log(myTasks.removeTask(task3.id));  // Should print: true
console.log(myTasks.getAllTasks().length);  // Should print: 2

// Create a second task manager - it should have its own separate list
let workTasks = createTaskManager();
workTasks.addTask("Reply to emails");
workTasks.addTask("Attend meeting");

console.log(workTasks.getAllTasks().length);  // Should print: 2
console.log(myTasks.getAllTasks().length);    // Should still print: 2 (separate list!)