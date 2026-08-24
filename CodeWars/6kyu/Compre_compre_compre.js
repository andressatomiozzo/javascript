// Shopping Spree
// Bob enjoys playing a certain video game. Recently, he received P pennies as pocket money and decided to spend them on in-game items.

// There are N items arranged in order in a shop. Bob always starts with the first item and tries to unlock as many consecutive items as possible.

// Bob has two ways to unlock an item:

// Pay with pennies: He can purchase an item using his available pennies. The items have their respective prices.
// Use a discount coupon: After winning a gaming contest, Bob received two discount coupons. Each coupon can be used to unlock one item completely for free. Each coupon can be used only once.
// Bob wants to use his pennies and the two coupons in the best possible way so that he unlocks the maximum number of consecutive items starting from the first item.

// He must stop as soon as he cannot unlock the next item. In particular, if he decides not to unlock an item, he cannot unlock any item that comes after it.

// Determine the maximum number of items Bob can unlock.

// Example 1
// Input:

// p = 15
// shop = [10, 6, 2, 12, 9]
// Output:

// 4
// Explanation: There are multiple ways to purchase 4 items. One of them is: Buy {10, 6} with coupons and {2, 12} using 14 pennies. There is no way to buy all 5 items.

// Example 2
// Input:

// p = 5
// shop = [7, 4, 6, 3]
// Output:

// 3
// Explanation: Buy {7, 6} using coupons and {4} using pennies.

// Constraints
// 0 <= N <= 106
// 1 <= Shop[i] <= 109
// 0 <= P <= 1015

function shoppingSpree(p, shop) {
  let coupons = 2;
  let spent = 0;
  let paidItems = [];

  for (let i = 0; i < shop.length; i++) {
    let cost = shop[i];

    if (spent + cost <= p) {
      spent += cost;
      paidItems.push(cost);
      paidItems.sort((a, b) => b - a);
    } else if (coupons > 0) {
      coupons--;
      if (paidItems.length > 0 && paidItems[0] > cost) {
        let refunded = paidItems.shift();
        spent -= refunded;

        spent += cost;
        paidItems.push(cost);
        paidItems.sort((a, b) => b - a);
      }
    }
    else {
      return i;
    }
  }

  return shop.length;
}

console.log(shoppingSpree(15, [10, 6, 2, 12, 9]));
