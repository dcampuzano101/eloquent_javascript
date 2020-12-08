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

# Classes - JavaScripts prototype system can be interpreted as a somewhat informal take on an object-oriented concept called _classes_

### Prototypes are useful for defining properties that all instances of a class share ie ( .speak .run .hop )

### In order to create an instance of a given class, you have to make an object that derives from the proper prototype, but you ALSO have to it, itself, has all the properties that instances of this class are supposed to have.

### All functions / constructors automatically have a property called .prototype, by default it is {}, you can replace the value, add to it

```
Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = (line) => { console.log( `The ${this.type} rabbit says ${line}`)}

const whiteRabbit = new Rabbit('white');
whiteRabbit.speak('yoo');
// the white rabbit says yoo
```
