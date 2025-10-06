/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let currentCount = n; // Store the initial value in a variable
  return function () {
    // Return the current value and then increment it for the next call
    return currentCount++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
