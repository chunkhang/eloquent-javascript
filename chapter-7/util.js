function randomPick(array) {
  const choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

module.exports = {
  randomPick
};
