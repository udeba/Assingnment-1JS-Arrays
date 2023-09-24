// We create an array that repeats all elements except one element three times.
const numbers = [7, 1, 7, 7, 1, 8, 99, 99, 1, 8, 12, 12, 99, 8];
// We create an object to store how many times each number is repeated.
let repeaterNumber;
// We calculate the number of occurrences of each element in the array and save them in the counts object.
for (let i = 0; i < numbers.length; i++) {
  let count = 0;
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      count++;
    }
  }
  if (count % 3 !== 0) {
    repeaterNumber = numbers[i];
    break;
  }
}
// We find the elements that do not repeat three times and print them to the console.
console.log(
  "Number with different repetitions in the series:" + repeaterNumber
);
