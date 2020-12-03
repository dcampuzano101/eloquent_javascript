function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
console.log(twice);
console.log(twice(5));
