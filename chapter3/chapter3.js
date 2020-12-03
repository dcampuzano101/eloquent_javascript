const min = (a, b) => {
  return a < b ? a : b;
};

console.log(min(3, 5));
console.log(min(13, 5));

const isEven = (number) => {
  if (number < 0) {
    return isEven(-number);
  } else if (number == 1) {
    return false;
  } else if (number == 0) {
    return true;
  } else {
    return isEven(number - 2);
  }
};

console.log(isEven(1));

// const countBs = (str) => {
//   let char = "B";
//   let i = 0;
//   let count = 0;
//   while (i < str.length) {
//     if (str[i] === char) {
//       count += 1;
//     }
//     i++;
//   }
//   return count;
// };

// console.log(countBs("hubBbBbABB"));

const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i] === char) {
      count += 1;
    }
    i++;
  }
  return count;
};
console.log(countChars("motherfucker in the woods", "e"));

//closure
const countBs = () => countChars("hubBbBbABB", "B");

console.log(countBs());
