// specialContacts.js

const Contact = require("./Contact");


// WorkContact inherits from Contact
class WorkContact extends Contact {
    constructor({
        firstName,
        lastName,
        phone,
        email,
        tag,
        company,
        jobTitle
    }) {
        // Send the base contact fields to the parent constructor
        super({
            firstName,
            lastName,
            phone,
            email,
            tag
        });

        this.company = company;
        this.jobTitle = jobTitle;
    }

    // Overrides the Contact toSummary() method
    toSummary() {
        return `${this.getFullName()} | ${this.jobTitle} at ${this.company} | ${this.phone} | ${this.email}`;
    }

    // Returns a multi-line business card
    getBusinessCard() {
        return (
            "========================\n" +
            `  ${this.getFullName()}\n` +
            `  ${this.jobTitle}\n` +
            `  ${this.company}\n` +
            `  ${this.phone}\n` +
            `  ${this.email}\n` +
            "========================"
        );
    }
}


// FamilyContact also inherits from Contact
class FamilyContact extends Contact {
    constructor({
        firstName,
        lastName,
        phone,
        email,
        relationship,
        birthday
    }) {
        // Force the tag to "family"
        super({
            firstName,
            lastName,
            phone,
            email,
            tag: "family"
        });

        this.relationship = relationship;
        this.birthday = birthday;
    }

    // Overrides the Contact toSummary() method
    toSummary() {
        return `${this.getFullName()} (${this.relationship}) | ${this.phone} | ${this.email} | Birthday: ${this.birthday}`;
    }

    // Checks whether the birthday month matches the current month
    isBirthdayThisMonth() {
        const currentMonth = new Date().getMonth();

        // Birthday format is YYYY-MM-DD
        const birthdayMonth = Number(this.birthday.split("-")[1]) - 1;

        return birthdayMonth === currentMonth;
    }
}


module.exports = {
    WorkContact,
    FamilyContact
};