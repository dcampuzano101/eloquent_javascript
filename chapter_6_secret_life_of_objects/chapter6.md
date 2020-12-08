# Secret Life of Objects

## Object Oriented Programming - A Set of techniques that use objects and related concepts as the central principle of program organization.

## Encapsulation

- Dividing programs into smaller pieces and making each piece responsible for managing its own state.
- When the state changes, only the code directly connect to it needs to be updated.

## General Program Structure

- A Program is made up of Objects, each of those Objects have their own sets of Methods and Properties.
- Method is a property that holds a function value ie. ( speak ) Rabbit.speak()

```
const Rabbit = {} // 'POJO' Plain Old JavaScript Object
Rabbit.speak = (line) => { console.log(`The rabbit says ${line}`) }
Rabbit.speak("I'm alive");
```

### When a function is called as a method, the binding called _this_ in it's body refers to the object that it was called on

```
const speak = (line) => { console.log(`The ${this.type} rabbit says ${line}`)};
const whiteRabbit = { type: "white", speak };

whiteRabbit.speak('im cold');
// the white rabbit says i'm cold
```

### Functions have a property called .call, which takes _this_ as it's first parameter, the rest of the parameters are treated the same

### therefore whiteRabbit.speak('hi') === speak.call(whiteRabbit, 'hi');

### each function has it's own _this_ binding, whose value depends on the way it is called.

```
// we are allowed to reference the correct, 'this' in the fat arrow function because it isn't implicitly bound to the local context'
function normalize() { console.log(this.coords.map(n => n / this.length)) }
normalize.call({coords: [0,2,3], length: 5});
// [ 0, 0.4, 0.6]


// this.length === undefined, bc *this* is bound to it's local context
function norm () { console.log(this.coords.map(function(n) { n / this.length}))}
norm.call({coords: [0,2,3], length: 5});
// [undefined, undefined, undefined]
```

# Prototypes

- In addition to their methods and properties, most objects have a _Prototype_
- Ancestral Prototype: Object.prototype

```
Object.getPrototypeOf({}) === Object.prototype
Object.getPrototypeOf(Object.prototype)  === null
```

- functions derive from Function.prototype & arrays derive from Array.prototype

```
const protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line})
    }
};

const killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak('GRR');
// The killer rabbit says GRR
```

- protoRabbit = Prototype
  - protoRabbit.speak === available to all instances
- killerRabbit = instance of protoRabbit
  - .type === available to local instance

# Classes

## JavaScripts prototype system can be interpreted as a somewhat informal take on an object-oriented concept called _classes_

- Prototypes are useful for defining properties that all instances of a class share ie ( .speak .run .hop )

- In order to create an instance of a given class, you have to make an object that derives from the proper prototype, but you ALSO have to it, itself, has all the properties that instances of this class are supposed to have.

- All functions / constructors automatically have a property called .prototype, by default it is {}, you can replace the value, add to it

## Class Notation

- Class declarations only allow methods -- properties that hold functions. This can be

```
class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak (line) {
        console.log(`the ${this.type} rabbit says ${line})
    }
}
```

### Overriding derived properties from Prototype

```
Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth); // small

killerRabbit.teeth = 'long, sharp, and bloody';
console.log(killerRabbit.teeth); // long, sharp, and bloody

console.log(blackRabbit.teeth); // small
console.log(whiteRabbit.teeth); // small
```

- Overriding properties can be used to express exceptional properties in instances of a more generic class of objects, while letting the non-exceptional objects take a standard value from their prototype.
- Overriding gives different toString() methods to different values

```
console.log(Object.prototype.toString === Array.prototype.toString) // false
console.log([1, 2].toString()) // '1, 2';
console.log(Object.prototype.toString.call([1, 2])) // [object Array];
```

# Maps
