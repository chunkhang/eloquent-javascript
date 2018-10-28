function max(...numbers) {
  let result = -Infinity;
  for (const number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(4, 1, 9, -2));

const numbers = [5, 1, 7];
console.log(max(...numbers));
