// Consider the string "adfa" and the following rules:

// a) each character MUST be changed either to the one before or the one after in alphabet.
// b) "a" can only be changed to "b" and "z" to "y".
// From our string, we get:

// "adfa" -> ["begb","beeb","bcgb","bceb"]

// Here is another example:
// "bd" -> ["ae","ac","ce","cc"]

// --We see that in each example, one of the outcomes is a palindrome. That is, "beeb" and "cc".
// You will be given a lowercase string and your task is to return True if at least one of the outcomes is a palindrome or False otherwise.

// More examples in test cases. Good luck!

function solve(s) {
  const resultado = s.split("").map((letter) => {
    return {
      anterior: letter === "a" ? "b" : String.fromCharCode(letter.charCodeAt(0) - 1),
      posterior: letter === "z" ? "y" : String.fromCharCode(letter.charCodeAt(0) + 1),
    };
  });

  console.log(resultado)

  for (let i = 0; i < resultado.length / 2; i++) {
    const a = resultado[i];
    const b = resultado[resultado.length - i - 1];
    if (
      a.anterior !== b.anterior &&
      a.anterior !== b.posterior &&
      a.posterior !== b.anterior &&
      a.posterior !== b.posterior
    ) {
      console.log("false");
    }
  }
  console.log("true");
}

solve("abaazaba");
