const loopTriangle = () => {
  let char = "#";
  while (char.length <= 7) {
    console.log(char);
    char += "#";
  }
};
loopTriangle();

const fizzBuzz = () => {
  let num = 1;
  while (num <= 100) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
    num += 1;
  }
};

console.log(fizzBuzz());
