function deepEqual(x, y) {
  if (typeof x === 'object' && typeof y === 'object') {
    if (x === null && y === null) {
      return true;
    } else {
      for (const key of Object.keys(x)) {
        if (y[key] === undefined) {
          return false;
        } else {
          if (!deepEqual(x[key], y[key])) {
            return false;
          }
        }
      }
      return true;
    }
  } else {
    return x === y;
  }
}

console.log(deepEqual(null, null));
// -> true
console.log(deepEqual(1, null));
// -> false
console.log(deepEqual(null, 1));
// -> false
console.log(deepEqual(1, 1));
// -> true
console.log(deepEqual(1, 2));
// -> false
console.log('---');
console.log(deepEqual(
  {
    a: 1,
    b: 2
  },
  {
    a: 1,
    b: 2
  }
));
// -> true
console.log(deepEqual(
  {
    a: 1,
    b: 2
  },
  {
    a: 1,
    b: 1
  }
));
// -> false
console.log(deepEqual(
  {
    a: 1,
    b: 2
  },
  {
    a: 1
  }
));
// -> false
console.log(deepEqual(
  {
    a: 1,
    b: {
      x: 1,
      y: {
        z: 2
      }
    }
  },
  {
    a: 1,
    b: {
      x: 1,
      y: {
        z: 2
      }
    }
  }
));
// -> true
console.log(deepEqual(
  {
    a: 1,
    b: {
      x: 1,
      y: {
        z: 2
      }
    }
  },
  {
    a: 1,
    b: {
      x: 1,
      y: {
        z: 3
      }
    }
  }
));
// -> false
