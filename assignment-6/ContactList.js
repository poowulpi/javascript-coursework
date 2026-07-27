// ContactList.js

const Contact = require("./Contact");

class ContactList {

    constructor(listName) {
        this.listName = listName;
        this.contacts = [];
    }

    // Creates a new Contact and adds it to the list
    addContact(contactData) {
        const newContact = new Contact(contactData);
        this.contacts.push(newContact);
        return newContact;
    }

    // Removes a contact by id
    removeContact(id) {
        const index = this.contacts.findIndex(contact => contact.id === id);

        if (index === -1) {
            return false;
        }

        this.contacts.splice(index, 1);
        return true;
    }

    // Finds contacts whose full name contains the search text
    findByName(searchText) {
        return this.contacts.filter(contact =>
            contact.getFullName().toLowerCase().includes(searchText.toLowerCase())
        );
    }

    // Finds contacts by tag
    findByTag(tag) {
        return this.contacts.filter(contact =>
            contact.tag.toLowerCase() === tag.toLowerCase()
        );
    }

    // Finds contacts by area code
    findByAreaCode(areaCode) {
        return this.contacts.filter(contact =>
            contact.getAreaCode() === areaCode
        );
    }

    // Returns every contact
    getAllContacts() {
        return this.contacts;
    }

    // Returns the total number of contacts
    getCount() {
        return this.contacts.length;
    }

    // Creates a formatted report
    getSummaryReport() {
        let report = `${this.listName} (${this.getCount()} contacts)\n`;

        for (let i = 0; i < this.contacts.length; i++) {
            report += `${i + 1}. ${this.contacts[i].toSummary()}`;

            if (i < this.contacts.length - 1) {
                report += "\n";
            }
        }

        return report;
    }
}

module.exports = ContactList;