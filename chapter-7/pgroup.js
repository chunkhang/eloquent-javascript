class PGroup {
  constructor(members = []) {
    this.members = members;
  }

  add(value) {
    if (!this.has(value)) {
      return new PGroup(this.members.concat(value));
    }
  }

  delete(value) {
    if (this.has(value)) {
      return new PGroup(this.members.filter(v => v !== value));
    }
  }

  has(value) {
    return this.members.includes(value);
  }

  static get empty() {
    return new PGroup();
  }
}

const a = PGroup.empty.add('a');
const ab = a.add('b');
const b = ab.delete('a');

console.log(b.has('b'));
console.log(a.has('b'));
console.log(b.has('a'));
