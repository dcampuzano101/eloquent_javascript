# Higher Order Functions

### Abstraction

- Ability to abstract problems into higher level concepts, unconcerned about minor details.

```
const sumOfRange = (start, end) => {
    let sum = 0;

    while (start < end) {
        sum += start;
        start += 1;
    }
    return sum;
}

// could be abstracted

const result = sum(range(start, end));
```

### Functions are no different than any other value and can be treated as such. Higher Order Functions can operate on other functions, take functions as parameters, and return functions.

### Pure Function - does not modify the array / parameter that is passed

## Composability - HOF shine when we need to compose operations

```
const avg = (array) => (array.reduce((a, b) => a + b) / array.length);

console.log(Math.round(avg(SCRIPTS.filter(s => s.living).map(s => s.year))))
```

### Array.reduce(array, combiningFunction, startValue) - builds a value by repeatedly taking a single element from the array and combining it with the current value

```
const reduce = (arr, combine, start) => {
    let current = start;
    for (let el of arr) {
        current = combine(current, element);
    }
    return current;
}
```
