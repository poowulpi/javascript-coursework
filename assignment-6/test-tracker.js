const createChangeTracker = require("./changeTracker");

let tracker = createChangeTracker(1001);

tracker.logChange("email", "old@mail.com", "new@mail.com");
tracker.logChange("phone", "555-0000", "555-1111");
tracker.logChange("email", "new@mail.com", "newest@mail.com");

console.log(tracker.getChangeCount());       // 3
console.log(tracker.getLastChange());
console.log(tracker.getFieldHistory("email").length); // 2

// Verify the closure keeps data private
let history = tracker.getHistory();

history.push({
    field: "FAKE",
    oldValue: "x",
    newValue: "y"
});

console.log(tracker.getChangeCount());       // Still 3

// Create another independent tracker
let tracker2 = createChangeTracker(2002);

tracker2.logChange("firstName", "Bob", "Robert");

console.log(tracker2.getChangeCount());      // 1
console.log(tracker.getChangeCount());       // Still 3