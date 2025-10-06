/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentvalue = init;
  return {
    increment: () => {
      currentvalue++;
      return currentvalue;
    },
    decrement: () => {
      currentvalue--;
      return currentvalue;
    },
    reset: () => {
      currentvalue = init;
      return currentvalue;
    },
  };
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
