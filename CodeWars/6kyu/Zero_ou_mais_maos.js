// Touch typing is a typing technique where each hand is responsible for specific keys on the keyboard.

// In this kata, you will simulate this behaviour using a simplified keyboard layout based on a QWERTY keyboard.

// Keyboard layout
// Left hand letters
// qwert
// asdfg
// zxcvb
// Right hand letters
// yuiop
// hjkl
// nm
// Task
// Write a function that receives a single lowercase word ( without any spaces ), and returns:

// NONE if the word is empty
// LEFT if the word can be typed using only the left hand
// RIGHT if the word can be typed using only the right hand
// BOTH if the word requires both hands
// The word will be encoded as an iterable, yielding strings of single letters.

// Rules
// Input contains only lowercase letters a to z
// Use only the keyboard layout provided above
// The word can be infinite ( this will only be tested with words with a finite prefix typed on both sides of the keyboard )
// Preloaded
// Use Hand = [ NONE, LEFT, RIGHT, BOTH ] defined in Preloaded.
// Hand supplies a well-defined mapping to and from numbers. Its use is optional.
// The return value must be one of NONE, LEFT, RIGHT, BOTH.

// Examples
// ""       ->  NONE
// "gaffe"  ->  LEFT
// "cards"  ->  LEFT
// "milk"   ->  RIGHT
// "pill"   ->  RIGHT
// "type"   ->  BOTH

Hand = ["none", "left", "right", "both"];

function whichHand(word) {
  // Cria um array com as letras do teclado
  const left = new Set("qwertasdfgzxcvb");
  const right = new Set("yuiophjklnm");

  let hasLeft = false;
  let hasRight = false;

  for (const letter of word) {
    // has() é usado em Set, ele é como se fosse o includes() no Array
    if (left.has(letter)) hasLeft = true;
    if (right.has(letter)) hasRight = true;

    // Para assim que a palavra tiver os dois lados
    if (hasLeft && hasRight) {
      return Hand[3];
    }
  }

  if (hasLeft) return Hand[1];
  if (hasRight) return Hand[2];
  return Hand[0];
}
console.log(whichHand("aa"));
