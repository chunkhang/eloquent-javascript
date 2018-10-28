const size = 8;

let flag = true;
let string = '';
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (flag) {
      string += ' ';
    } else {
      string += '#';
    }
    flag = !flag;
  }
  string += '\n';
  flag = !flag;
}
console.log(string);
