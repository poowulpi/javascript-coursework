// Calculates and returns the average of an array of numbers.
function calculateAverage(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    const average = total / numbers.length;
    return average;
}

// Finds and returns the largest number in an array.
function findHighestNumber(numbers) {
    let highestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i];
        }
    }

    return highestNumber;
}

// Finds and returns the smallest number in an array.
function findLowestNumber(numbers) {
    let lowestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < lowestNumber) {
            lowestNumber = numbers[i];
        }
    }

    return lowestNumber;
}

const nums = [23, 45, 12, 67, 34, 89, 21];

console.log(calculateAverage(nums));
console.log(findHighestNumber(nums));
console.log(findLowestNumber(nums));