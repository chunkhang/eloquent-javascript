class Group {
  constructor() {
    this.set = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.set.push(value);
    }
  }

  delete(value) {
    if (this.has(value)) {
      this.set = this.set.filter(v => v !== value);
    }
  }

  has(value) {
    return this.set.includes(value);
  }

  static from(range) {
    const group = new Group();
    for (const item of range) {
      group.add(item);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.set = group.set;
  }

  next() {
    if (this.index === this.set.length) {
      return {
        done: true
      };
    }
    const result = {
      value: this.set[this.index],
      done: false
    };
    this.index++;
    return result;
  }
}

for (const value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
