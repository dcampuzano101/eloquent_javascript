# Chapter 3 - Functions

## Bindings and Scopes

### Global Execution Context

- Available to all functions in the environment / program -- global scope

### Local Scope

- bindings declared using let / const are local to the _block_. var is available throughout the function

- Each scope can 'look out' into the scope around it, unless multiple bindings, in which case it is only concerned with innermost.

```javascript
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z); // 60
}
//y is not available here
console.log(x + z); // 40
```

### Function Declarations

- Functions can behave as values
  `let halved = halve(num)`

- Functions declared with the function functionName() {} syntax, are hoisted to the top of the control flow and allowed to be used/invoked by all code in its' scope

### The Call Stack

- Understand basic order of when things are invoked/called/

### Closures

- A function that references bindings from local scopes around it is called a _closure_
- function values contain both the code in their body and the environment that they are created in.

```
function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
console.log(twice); // anonymous function
console.log(twice(5)); // 10
```

- multiplier is called and creates an environment in which its factor param is bound to 2. \n
  the function value it returns, which is stored in _twice_, remembers this environment. So when that its called it multiplies its argument by 2

### Recursion _barf_
