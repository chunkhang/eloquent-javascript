class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.group.push(value);
    }
  }

  delete(value) {
    if (this.has(value)) {
      this.group = this.group.filter(v => v !== value);
    }
  }

  has(value) {
    return this.group.includes(value);
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
