// const loopTriangle = () => {
//   let char = "#";
//   while (char.length <= 7) {
//     console.log(char);
//     char += "#";
//   }
// };
// loopTriangle();

// const fizzBuzz = () => {
//   let num = 1;
//   while (num <= 100) {
//     if (num % 3 === 0 && num % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (num % 3 === 0) {
//       console.log("Fizz");
//     } else if (num % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(num);
//     }
//     num += 1;
//   }
// };

// console.log(fizzBuzz());
//
const chessBoard = (size) => {
  let result = "";
  for (let i = 0; i <= size * size; i++) {
    let char;
    if (i % 2 === 0) {
      char = " ";
    } else {
      char = "#";
    }
    if (i % size === 0 && i !== 0) {
      char += "\n";
    }
    result += char;
  }
  console.log(result);
};

const chessBoardTwo = (size) => {
  let result = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      (i + j) % 2 === 0 ? (result += " ") : (result += "#");
    }
    result += `\n`;
  }
  return result;
};

console.log(chessBoardTwo(8));
