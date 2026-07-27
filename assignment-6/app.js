// app.js

const ContactList = require("./ContactList");
const Contact = require("./Contact");
const { WorkContact, FamilyContact } = require("./specialContacts");
const createChangeTracker = require("./changeTracker");


// ──────────────────────────────────────────
// 1. Create a ContactList called "My Contacts"
// ──────────────────────────────────────────

const myContacts = new ContactList("My Contacts");


// ──────────────────────────────────────────
// 2. Add at least 5 contacts
// ──────────────────────────────────────────

// Regular contact 1
const alice = myContacts.addContact({
    firstName: "Alice",
    lastName: "Johnson",
    phone: "(801) 555-1234",
    email: "alice@example.com",
    tag: "friend"
});

// Regular contact 2
const david = myContacts.addContact({
    firstName: "David",
    lastName: "Miller",
    phone: "727-555-2020",
    email: "david@example.com",
    tag: "school"
});

// Work contact 1
const bob = new WorkContact({
    firstName: "Bob",
    lastName: "Smith",
    phone: "801-555-9999",
    email: "bob@google.com",
    tag: "work",
    company: "Google",
    jobTitle: "Engineer"
});

// Work contact 2
const maria = new WorkContact({
    firstName: "Maria",
    lastName: "Lopez",
    phone: "(727) 555-3030",
    email: "maria@designco.com",
    tag: "work",
    company: "Design Co.",
    jobTitle: "Designer"
});

// Family contact
const carol = new FamilyContact({
    firstName: "Carol",
    lastName: "Davis",
    phone: "(212) 555-0000",
    email: "carol@mail.com",
    relationship: "Sister",
    birthday: "1990-07-15"
});

// WorkContact and FamilyContact already exist,
// so add them directly to the ContactList array
myContacts.getAllContacts().push(bob);
myContacts.getAllContacts().push(maria);
myContacts.getAllContacts().push(carol);


// ──────────────────────────────────────────
// 3. Demonstrate searching
// ──────────────────────────────────────────

console.log('=== Search Results: Name contains "ali" ===');

const nameResults = myContacts.findByName("ali");

console.log(`Found ${nameResults.length} contact(s):`);

for (const contact of nameResults) {
    console.log(`- ${contact.getFullName()}`);
}


console.log('\n=== Search Results: Tag is "work" ===');

const tagResults = myContacts.findByTag("work");

console.log(`Found ${tagResults.length} contact(s):`);

for (const contact of tagResults) {
    console.log(`- ${contact.getFullName()}`);
}


console.log('\n=== Search Results: Area code "801" ===');

const areaCodeResults = myContacts.findByAreaCode("801");

console.log(`Found ${areaCodeResults.length} contact(s):`);

for (const contact of areaCodeResults) {
    console.log(`- ${contact.getFullName()}`);
}


// ──────────────────────────────────────────
// 4. Demonstrate the change tracker
// ──────────────────────────────────────────

const aliceTracker = createChangeTracker(alice.id);

// Update 1
let oldValue = alice.email;
let newValue = alice.update("email", "alice.j@newmail.com");
aliceTracker.logChange("email", oldValue, newValue);

// Update 2
oldValue = alice.phone;
newValue = alice.update("phone", "(801) 555-0000");
aliceTracker.logChange("phone", oldValue, newValue);

// Update 3
oldValue = alice.tag;
newValue = alice.update("tag", "work");
aliceTracker.logChange("tag", oldValue, newValue);


console.log(`\n=== Change History for ${alice.getFullName()} ===`);

const changeHistory = aliceTracker.getHistory();

console.log(`${aliceTracker.getChangeCount()} changes recorded:`);

for (let i = 0; i < changeHistory.length; i++) {
    const change = changeHistory[i];

    console.log(
        `${i + 1}. ${change.field}: ${change.oldValue} -> ${change.newValue}`
    );
}


// ──────────────────────────────────────────
// 5. Demonstrate inheritance
// ──────────────────────────────────────────

console.log("\n=== Inheritance Demonstration ===");

console.log("\nBob's Business Card:");
console.log(bob.getBusinessCard());

console.log(
    `\nIs ${carol.getFullName()}'s birthday this month?`,
    carol.isBirthdayThisMonth()
);

console.log(
    `Is ${bob.getFullName()} a WorkContact?`,
    bob instanceof WorkContact
);

console.log(
    `Is ${bob.getFullName()} also a Contact?`,
    bob instanceof Contact
);


// ──────────────────────────────────────────
// 6. Print the final summary report
// ──────────────────────────────────────────

console.log("\n=== My Contacts - Summary Report ===");
console.log(myContacts.getSummaryReport());