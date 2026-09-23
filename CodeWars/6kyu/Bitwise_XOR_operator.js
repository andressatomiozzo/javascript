// Given a number n, define its sXORe to be 0 XOR 1 XOR 2 ... XOR n where XOR is the bitwise XOR operator.

// Write a function that takes n and finds its sXORe.

//         n |   sXORe n
// ----------|----------
//         0 |         0
//         1 |         1
//        50 |        51
// 1 000 000 | 1 000 000

// function sXORe(n) {
//   switch (n % 4) {
//       case 0: return n;
//       case 1: return 1;
//       case 2: return n + 1;
//       case 3: return 0;
//   }
// }

// function xorReduction(a, b) {
//   return a > 0 ? sXORe(b) ^ sXORe(a - 1) : sXORe(b);
// }

function xorReduction(m, n) {
  function getSXORe(x) {
    const rem = x % 4n;
    if (rem === 0n) return x;
    if (rem === 1n) return 1n;
    if (rem === 2n) return x + 1n;
    return 0n;
  }

  const nValue = getSXORe(n);
  const mValue = m > 0n ? getSXORe(m - 1n) : 0n;

  return mValue ^ nValue;
}

console.log(xorReduction(2, 22));
