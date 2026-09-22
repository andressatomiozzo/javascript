// An isogram (also known as a "nonpattern word") is a logological term for a word or phrase without a repeating letter. It is also used by some to mean a word or phrase in which each letter appears the same number of times, not necessarily just once.

// You task is to write a function that takes a string argument and returns true if the string has the properties of being an isogram and false otherwise.

// Properties:

// cannot be empty
// each letter appears the same number of times (not necessarily just once)
// letter case is not important (= case insensitive)
// non-letter characters (e.g. hyphens) should be ignored

const isIsogram = (str) => {
  if(str === "") return false
  const charUnic = new Set(str.toLowerCase());
  const cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  if(cleanStr === "") return false

  const arr = Array.from(
    cleanStr.replace(/./g, (char) => {
      if (charUnic.has(char)) {
        charUnic.delete(char);
        return char;
      }
      return "";
    }),
  );

  let indices2 = []

  arr.forEach(n => {
    let indice = cleanStr.indexOf(n);
    let indices = 0;
    while (indice !== -1) {
      indices += 1;
      indice = cleanStr.indexOf(n, indice + 1);
    }
    indices2.push(indices)
  });

  return new Set(indices2).size <= 1;
};

console.log(isIsogram("eenn"));

// function isIsogram(str) {
  
//   if (typeof str !== 'string')
//     return false;
  
//   const counts = str
//     .toLowerCase()
//     .replace(/[^a-z]+/g, '')
//     .split('')
//     .reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {});
  
//   const unique = new Set(Object.values(counts));
  
//   return unique.size === 1;
  
// }
