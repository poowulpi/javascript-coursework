// Prompt used:
// "Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. Please include test examples."

function getEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// The filter() method creates a new array containing only the elements that satisfy the condition num % 2 === 0 (i.e., numbers divisible by 2 with no remainder).

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = getEvenNumbers(nums);

console.log(evens);