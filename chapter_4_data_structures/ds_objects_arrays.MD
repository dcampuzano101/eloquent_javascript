# Arrays

### Properties

- .indexOf
- .lastIndexOf
- .length
- .push
- .pop
- .shift .unshift
- .slice

# Strings

- Values of type _String_, _Number_, _Boolean_ are not objects, therefore their values are immutable and cannot be changed. However, JS doesn't complain if you attempt they just do not stick.

### Properties

- .slice
- .indexOf
- .trim //removes whitespace
- .split
- .join
- .repeat

# Rest Parameters

```
const max = (...numbers) => {
    let result = -Infinity;
    for (let num of numbers) {
        if (num > result) result = num;
    }
    return result;
}

let nums = [5, 1, 7];
console.log(max(...nums));
```

- useful when you want to pass an undetermined amount of arguments/parameters to a function
- also use as a 'spread' operator and passes the elements of the array one element at a time.

# Math Object

### Provides a useful conservation of _namespace_, It hides useful methods/properties inside the _Math_ object. If our global variables are too verbose, there is a high likely-hood of overwriting and running into problems.

# Destructuring

- In order to improve readability you can destructure your parameter, for example if your parameter is an array, (not sure if you need to know # of elements)

```
function phi(table) {
    return
    (table[3] * table[0] - table[2] * table[1])
        / Math.sqrt(table[2] + table[3]) ...
}

// can create bindings for the elements of the array

function phi([n00, n01, n10, n11]) {
    ....
}

const { name, age } = {name: 'David', age: 42};
console.log(name); // 'David'
console.log(age); // 42
```

# JSON - JavaScript Object Notation

### Widely used as Data Storage and Communication format even for languages other than JS.

### Very similar to JavaScript's ways to write Arrays and Objects, with a few key differences.

- Properties must always be surrounded by double quotes { "squirrel": true }
- only simple data expressions are allowed, no function calls, no comments
- JSON.stringify({ jsObject }) // JSON.parse(JSONObject) to and from formats.
