// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false

const solution = (str, ending) => {
  const strArray = str.split("");
  const endingArray = ending.split("");
  for (let i = 1; i <= ending.length; i++) {
    console.log(strArray[strArray.length - i], endingArray[endingArray.length - i])
    if (strArray[strArray.length - i] !== endingArray[endingArray.length - i]) console.log("false");
  }
  console.log("true");
};

const solution = (str, ending) => str.endsWith(ending);

solution("relogio", "agio");
