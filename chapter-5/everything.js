function everyLoop(array, test) {
  for (const item of array) {
    if (!test(item)) {
      return false;
    }
  }
  return true;
}

function everySome(array, test) {
  return !array.some(item => !test(item));
}

console.log(everyLoop([1, 2, 3], n => n >= 1));
console.log(everyLoop([0, 2, 3], n => n >= 1));
console.log(everySome([1, 2, 3], n => n >= 1));
console.log(everySome([0, 2, 3], n => n >= 1));
