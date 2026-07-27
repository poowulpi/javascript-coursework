// Contact.js

const {
    isValidName,
    isValidPhone,
    isValidEmail,
    isValidTag
} = require("./validators");


class Contact {
    constructor({ firstName, lastName, phone, email, tag }) {
        // Validate each field before creating the contact
        if (!isValidName(firstName)) {
            throw new Error("Invalid first name: " + firstName);
        }

        if (!isValidName(lastName)) {
            throw new Error("Invalid last name: " + lastName);
        }

        if (!isValidPhone(phone)) {
            throw new Error("Invalid phone number: " + phone);
        }

        if (!isValidEmail(email)) {
            throw new Error("Invalid email address: " + email);
        }

        if (!isValidTag(tag)) {
            throw new Error("Invalid tag: " + tag);
        }

        // Store the validated values
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.tag = tag.toLowerCase();

        // Create identifying information
        this.id = Date.now();
        this.createdAt = new Date();
    }


    // Returns the contact's first and last name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }


    // Removes non-number characters and returns the first 3 digits
    getAreaCode() {
        const digitsOnly = this.phone.replace(/\D/g, "");

        return digitsOnly.slice(0, 3);
    }


    // Updates one contact field after validating the new value
    update(field, value) {
        const validFields = [
            "firstName",
            "lastName",
            "phone",
            "email",
            "tag"
        ];

        if (!validFields.includes(field)) {
            throw new Error("Invalid field name: " + field);
        }

        if (field === "firstName" || field === "lastName") {
            if (!isValidName(value)) {
                throw new Error(`Invalid ${field}: ${value}`);
            }
        }

        if (field === "phone" && !isValidPhone(value)) {
            throw new Error("Invalid phone number: " + value);
        }

        if (field === "email" && !isValidEmail(value)) {
            throw new Error("Invalid email address: " + value);
        }

        if (field === "tag" && !isValidTag(value)) {
            throw new Error("Invalid tag: " + value);
        }

        // Keep tags consistent by storing them in lowercase
        if (field === "tag") {
            value = value.toLowerCase();
        }

        this[field] = value;

        return this[field];
    }


    // Returns a one-line summary of the contact
    toSummary() {
        return `${this.getFullName()} | ${this.phone} | ${this.email} | ${this.tag}`;
    }
}


module.exports = Contact;