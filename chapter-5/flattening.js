function flatten(arrays) {
  return arrays.reduce((flat, array) => {
    return flat.concat(array);
  });
}

console.log(flatten([[1, 2,3 ], [4, 5]]));
