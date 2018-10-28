function reverseArray(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    const head = i;
    const tail = array.length - 1 - i;
    const temp = array[head];
    array[head] = array[tail];
    array[tail] = temp;
  }
}

console.log(reverseArray([1, 2, 3, 4, 5]));

const array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
console.log(array);
