// Implement every as a function that takes an array and a predicate function as parameters.
// Write two versions, one using a loop and one using the some method.

// Predicate Function - A predicate function is a function that takes one value as input and returns true / false based on whether the value satisfies the condition.
// isEven() is a predicate function.

const everything = (arr, predicateFunction) => {
  for (let el of arr) {
    if (!predicateFunction(el)) {
      return false;
    }
  }
  return true;
};

const every = (arr, pred) => {
  return arr.some((el) => !pred(el)) === true ? false : true;
};

console.log(everything([1, 3, 5], (n) => n < 10));
// → true
console.log(everything([2, 4, 16], (n) => n < 10));
// → false
console.log(everything([], (n) => n < 10));
// → true
