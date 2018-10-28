function arrayToList(array) {
  let list = null;
  let innerList = null;
  for (let i = array.length - 1; i >= 0; i--) {
    innerList = list;
    list = prepend(array[i], innerList);
  }
  return list;
}

function listToArray(list) {
  const array = [];
  let currentList = list;
  do {
    array.push(currentList.value);
    currentList = currentList.rest;
  } while (currentList !== null);
  return array;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

function nth(list, number) {
  let index = 0;
  let currentList = list;
  do {
    if (currentList.value === number) {
      return index;
    }
    currentList = currentList.rest;
    index += 1;
  } while (currentList !== null);
  return undefined;
}

function nthRecursive(list, number, index = 0) {
  if (list === null) {
    return undefined;
  } else if (list.value === number) {
    return index;
  } else {
    return nthRecursive(list.rest, number, index + 1);
  }
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(1, arrayToList([2, 3])));
console.log(nth(arrayToList([1, 2, 3]), 3));
console.log(nthRecursive(arrayToList([1, 2, 3]), 3));
