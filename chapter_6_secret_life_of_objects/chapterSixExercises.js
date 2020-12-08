class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
Vector.prototype.plus = function (vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
};
Vector.prototype.minus = function (vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
};
Object.defineProperty(Vector.prototype, "length", {
  get: function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  },
});

let vect = new Vector(3, 4);

console.log(vect.minus(new Vector(5, 1)));

class Group {
  constructor() {
    this.group = {};
  }

  add(value) {
    if (!this.group.hasOwnProperty(value)) {
      this.group[value] = true;
    }
    console.log(this.group);
  }

  delete(value) {
    if (this.group.hasOwnProperty(value)) {
      delete this.group[value];
    } else {
      console.log(`this group does not have ${value}`);
    }
    console.log(this.group);
  }

  has(value) {
    console.log(this.group.hasOwnProperty(value));
  }

  static from(obj) {
    let newGroup = new Group();
    newGroup.group = obj;
    if (obj instanceof Object) {
      if (Array.isArray(obj)) {
        for (let i = 0; i < Object.keys(this.group).length; i++) {
          newGroup.add(Object.keys(this.group)[i]);
        }
        return newGroup;
      } else {
        for (const val of this.group) {
          newGroup.add(val);
        }
        return newGroup;
      }
    } else {
      return false;
    }
  }
}

const group = new Group();

group.add("yo");
group.add("mom");
group.add("dad");

group.has("dad");

group.delete("dad");

group.has("dad");

Group.from([]);
