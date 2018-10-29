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
}

const group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
