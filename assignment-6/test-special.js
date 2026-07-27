const {
    WorkContact,
    FamilyContact
} = require("./specialContacts");

const Contact = require("./Contact");


let work1 = new WorkContact({
    firstName: "Alice",
    lastName: "Johnson",
    phone: "(801) 555-1234",
    email: "alice@google.com",
    tag: "work",
    company: "Google",
    jobTitle: "Engineer"
});

console.log(work1.getFullName());
console.log(work1.toSummary());
console.log(work1.getBusinessCard());

console.log(work1 instanceof WorkContact);
console.log(work1 instanceof Contact);


let family1 = new FamilyContact({
    firstName: "Carol",
    lastName: "Davis",
    phone: "(212) 555-0000",
    email: "carol@mail.com",
    tag: "family",
    relationship: "Sister",
    birthday: "1990-03-15"
});

console.log(family1.toSummary());
console.log(family1.isBirthdayThisMonth());