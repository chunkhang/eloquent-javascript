function loop(start, test, update, body) {
  let current = start;
  while (test(current)) {
    body(current);
    current = update(current);
  }
}

loop(0, (i) => i < 10, (i) => i + 1, (i) => {
  console.log(i);
});
