for (let i = 1; i <= 100; i++) {
  let string = '';
  if (i % 3 === 0) {
    string += 'Fizz';
  }
  if (i % 5 === 0) {
    string += 'Buzz';
  }
  if (string.length === 0) {
    console.log(i);
  } else {
    console.log(string);
  }
}
