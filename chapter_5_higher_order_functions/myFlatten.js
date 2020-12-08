//Use the reduce method in combination with the concat method to 'flatten' an array of arrays
//into a single array that has all the elements of the original arrays

// const reduce = (arr, combine, start) => {
//   let current = start;
//   for (let el of arr) {
//     current = combine(current, element);
//   }
//   return current;
// };

var array = [[1, 2, 3], [4, 5], [6]];
console.log(
  array.reduce((a, b) => {
    return a.concat(b);
  })
);
// → [1, 2, 3, 4, 5, 6]
