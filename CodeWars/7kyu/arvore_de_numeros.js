// Given a number and a binary tree ( not a Binary Search Tree! ):

// return True/true if the given number is in the tree
// return False/false if it isn't
// Each node in the binary tree is either of this Node class or null:

// class Node {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function search(n, root) {
  if (root === null) return false;

  if (root.value === n) return true;

  return search(n, root.left) || search(n, root.right);
}

const root = new Node(666, new Node(555), new Node(444));

console.log(search(445, root));
