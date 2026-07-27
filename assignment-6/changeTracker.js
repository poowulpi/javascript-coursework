// changeTracker.js

function createChangeTracker(contactId) {

    // Private array (closure)
    let history = [];

    return {

        // Records a change
        logChange(field, oldValue, newValue) {
            const entry = {
                contactId: contactId,
                field: field,
                oldValue: oldValue,
                newValue: newValue,
                timestamp: new Date()
            };

            history.push(entry);

            return entry;
        },

        // Returns a copy of the history
        getHistory() {
            return [...history];
        },

        // Returns the number of recorded changes
        getChangeCount() {
            return history.length;
        },

        // Returns the most recent change
        getLastChange() {
            if (history.length === 0) {
                return null;
            }

            return history[history.length - 1];
        },

        // Returns only the changes for one field
        getFieldHistory(field) {
            return history.filter(change => change.field === field);
        }

    };
}

module.exports = createChangeTracker;