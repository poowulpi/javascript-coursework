// test-contact.js

const Contact = require("./Contact");

let c1 = new Contact({
    firstName: "Alice",
    lastName: "Johnson",
    phone: "(801) 555-1234",
    email: "alice@example.com",
    tag: "friend"
});

console.log(c1.getFullName());
console.log(c1.getAreaCode());
console.log(c1.toSummary());

c1.update("email", "alice.j@newmail.com");
console.log(c1.email);

try {
    new Contact({
        firstName: "",
        lastName: "X",
        phone: "123",
        email: "bad",
        tag: "nope"
    });
} catch (e) {
    console.log("Caught error: " + e.message);
}