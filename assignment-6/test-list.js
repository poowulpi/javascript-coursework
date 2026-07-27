const ContactList = require("./ContactList");

let myContacts = new ContactList("My Contacts");

myContacts.addContact({
    firstName: "Alice",
    lastName: "Johnson",
    phone: "(801) 555-1234",
    email: "alice@example.com",
    tag: "friend"
});

myContacts.addContact({
    firstName: "Bob",
    lastName: "Smith",
    phone: "801-555-9999",
    email: "bob@mail.com",
    tag: "work"
});

myContacts.addContact({
    firstName: "Carol",
    lastName: "Davis",
    phone: "(212) 555-0000",
    email: "carol@school.edu",
    tag: "school"
});

console.log(myContacts.getCount());
console.log(myContacts.findByName("alice").length);
console.log(myContacts.findByTag("work").length);
console.log(myContacts.findByAreaCode("801").length);

console.log("\n");
console.log(myContacts.getSummaryReport());