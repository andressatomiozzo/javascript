// Given a number n, define its sXORe to be 0 XOR 1 XOR 2 ... XOR n where XOR is the bitwise XOR operator.

// Write a function that takes n and finds its sXORe.

//         n |   sXORe n
// ----------|----------
//         0 |         0
//         1 |         1
//        50 |        51
// 1 000 000 | 1 000 000

// function sxore(n) {
//   let r = 0
//   for(let i = 1; i <= n; i++) {
//     r = r ^ i; 
//   }
//   return r;
// }

const sxore = (n) => {
  switch (n % 4) {
    case 0:
      return n;
    case 1:
      return 1;
    case 2:
      return n + 1;
    case 3:
      return 0;
  }
}

console.log(sxore(9))