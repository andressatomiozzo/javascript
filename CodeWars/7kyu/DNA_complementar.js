// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// function dnaStrand(dna) {
//   const dna1 = dna.toUpperCase().replaceAll("A", 1).replaceAll("T", 2).replaceAll("C", 3).replaceAll("G", 4);
//   const dna2 = dna1.replaceAll(1, "T").replaceAll(2, "A").replaceAll(3, "G").replaceAll(4, "C");
//   return  dna2
// }

function dnaStrand(dna) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna
    .toUpperCase()
    .split("")
    .map((char) => pairs[char])
    .join("");
}

console.log(dnaStrand("ATTGC"));
