// Array of user objects
const users = [
    { name: "Alice", email: "alice@email.com", active: true },
    { name: "Bob", email: "bob@email.com", active: false },
    { name: "Charlie", email: "charlie@email.com", active: true }
];

// Store the names of active users
const activeUserNames = [];

// Loop through each user and add active users' names to the array
for (let i = 0; i < users.length; i++) {
    if (users[i].active === true) {
        activeUserNames.push(users[i].name);
    }
}

// Display the list of active user names
console.log(activeUserNames);