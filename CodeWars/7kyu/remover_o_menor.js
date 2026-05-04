// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// const removeSmallest = (numbers) => {
//   let newNumbers = numbers.map(n => n);
//   let lower = newNumbers[0];
//   newNumbers.forEach((n) => n < lower && (lower = n));
//   newNumbers.splice( newNumbers.indexOf(lower) , 1)
//   return numbers === [] ? [] : newNumbers
// };

const removeSmallest = (numbers) => {
  const indexOfMin  = numbers.indexOf(Math.min(...numbers));
  return console.log(numbers.filter((_, i) => i !== indexOfMin));
};

removeSmallest([5, 8, 11, 1, 1, 55, 2]);
