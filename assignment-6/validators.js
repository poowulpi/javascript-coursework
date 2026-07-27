// validators.js

// Checks whether a name:
// - Is a string
// - Has at least 2 characters
// - Contains only letters, spaces, hyphens, and apostrophes
// - Is not empty or only whitespace
function isValidName(name) {
    if (typeof name !== "string") {
        return false;
    }

    const trimmedName = name.trim();
    const namePattern = /^[A-Za-z\s'-]+$/;

    return trimmedName.length >= 2 && namePattern.test(trimmedName);
}


// Checks for one of these phone formats:
// (555) 123-4567
// 555-123-4567
// 5551234567
function isValidPhone(phone) {
    if (typeof phone !== "string") {
        return false;
    }

    const phonePattern =
        /^(\(\d{3}\) \d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\d{10})$/;

    return phonePattern.test(phone);
}


// Checks whether an email:
// - Has text before the @
// - Contains exactly one @
// - Has a domain with at least one dot
function isValidEmail(email) {
    if (typeof email !== "string") {
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


// Checks whether the tag is one of the allowed options
function isValidTag(tag) {
    if (typeof tag !== "string") {
        return false;
    }

    const validTags = ["family", "friend", "work", "school", "other"];

    return validTags.includes(tag.toLowerCase());
}


// Export the functions so other files can use them
module.exports = {
    isValidName,
    isValidPhone,
    isValidEmail,
    isValidTag
};


// Quick tests
console.log(isValidName("Alice"));             // true
console.log(isValidName(""));                  // false
console.log(isValidName("John123"));           // false

console.log(isValidPhone("(801) 555-1234"));   // true
console.log(isValidPhone("8015551234"));       // true
console.log(isValidPhone("123"));              // false

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("bad@com"));          // false

console.log(isValidTag("family"));              // true
console.log(isValidTag("WORK"));                // true
console.log(isValidTag("bestie"));              // false