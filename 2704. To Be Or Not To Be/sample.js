const expect = (val) => {
  return {
    toBe: (val2) => {
      if (val === val2) {
        return true;
      } else {
        return "Not Equal";
      }
    },
    notToBe: (val2) => {
      if (val !== val2) {
        return true;
      } else {
        return "Equal";
      }
    },
  };
};

// Example 1: toBe returns true
let result1 = expect(5).toBe(5); // result1 will be true
console.log(result1);

// Example 2: toBe throws an error
try {
  expect(5).toBe(null);
} catch (e) {
  console.error(e.message); // "Not Equal"
}

// Example 3: notToBe returns true
let result3 = expect(5).notToBe(null); // result3 will be true
console.log(result3);

// Example 4: notToBe throws an error
try {
  expect(5).notToBe(5);
} catch (e) {
  console.error(e.message); // "Equal"
}
