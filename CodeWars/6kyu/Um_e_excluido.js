// One is the loneliest number
// Task
// The range of vision of a digit is its own value. 1 can see one digit to the left and one digit to the right, 2 can see two digits, and so on.

// Thus, the loneliness of a digit N is the sum of the digits which it can see.

// Given a non-negative integer, your funtion must determine if there's at least one digit 1 in this integer such that its loneliness value is minimal.

// Example
// number = 34315
// digit	can see on the left	can see on the right	loneliness
// 3	-	431	4 + 3 + 1 = 8
// 4	3	315	3 + 3 + 1 + 5 = 12
// 3	34	15	3 + 4 + 1 + 5 = 13
// 1	3	5	3 + 5 = 8
// 5	3431	-	3 + 4 + 3 + 1 = 11
// Is there a 1 for which the loneliness is minimal? Yes.

// Ver se tem o número 1
// Ver se o 1 é o número mais solitário

const loneliest = (number) => {
  const arr = Array.from(number.toString(), Number);
  if (!arr.includes(1)) return false;

  let minTotal = Infinity;
  let minOnes = Infinity;

  arr.forEach((n, index) => {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
      if (index - i >= 0) soma += arr[index - i];
      if (index + i < arr.length) soma += arr[index + i];
    }

    minTotal = Math.min(minTotal, soma);
    if (n === 1) minOnes = Math.min(minOnes, soma);
  });
  return minOnes <= minTotal;
};

// console.log(loneliest(34315))
console.log(loneliest(65432165432));
