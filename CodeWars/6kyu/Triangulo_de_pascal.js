// In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula
// , where n denotes a row of the triangle, and k is a position of a term in the row.

// Pascal's Triangle

// You can read Wikipedia article on Pascal's Triangle for more information.

// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
// Note
// Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on selected method of calculations, intermediate values can be larger.

function pascalsTriangle(n) {
  const triangle = [];
  for (let row = 0; row < n; row++) {
    //Faz um array dentro de um array
    triangle[row] = [];

    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        triangle[row][col] = 1;
      } else {
        triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
      }
    }
  }
  // o .flat atua como um reduce para fazer um [[], [], []] virar um []
  return triangle.flat();
}

console.log(pascalsTriangle(3));
