// taskUtils.js

// Function 1: createTask
// Takes a task description (string) as input
// Returns a task object with the following properties:
//   - id: a unique number (use Date.now() to generate this)
//   - description: the task description passed in
//   - completed: false (all new tasks start incomplete)

function createTask(description) {
    return {
        id: Date.now(),
        description: description,
        completed: false
    };
}


// Function 2: findTaskById
// Takes an array of tasks and an id number as input
// Returns the task object that matches the id
// Returns null if no task is found

function findTaskById(tasks, id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            return tasks[i];
        }
    }

    return null;
}


// Function 3: countByStatus
// Takes an array of tasks as input
// Returns an object with two properties:
//   - pending: the number of incomplete tasks
//   - completed: the number of completed tasks

function countByStatus(tasks) {
    let pending = 0;
    let completed = 0;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) {
            completed++;
        } else {
            pending++;
        }
    }

    return {
        pending: pending,
        completed: completed
    };
}


// Export all three functions so they can be used in other files
module.exports = {
    createTask,
    findTaskById,
    countByStatus
};