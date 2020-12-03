const sum = (range) => {
  let result = 0;
  for (let el of range) {
    result += el;
  }
  return result;
};

const range = (start, end, step) => {
  if (step === undefined) step = 1;
  let result = [];
  if (start > end) {
    while (start >= end) {
      result.push(start);
      start -= 1;
    }
  } else {
    while (start <= end) {
      result.push(start);
      start += 1;
    }
  }
  return result;
};
console.log(sum(range(5, 2, -1)));

const reverseArray = (arr) => {
  let i = 0;
  let x = arr.length - 1;
  while (i < Math.floor(arr.length / 2)) {
    let temp = arr[i];
    arr[i] = arr[x];
    arr[x] = temp;
    i += 1;
  }
  return arr;
};

console.log(reverseArray([5, 2, 1]));

const arrayToList = (array) => {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
};
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

const listToArray = (list) => {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

console.log(listToArray(arrayToList([10, 20, 30])));

const prepend = (value, list) => {
  return { value, rest: list };
};
console.log(prepend(10, prepend(20, null)));

const nth = (list, n) => {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
};

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
