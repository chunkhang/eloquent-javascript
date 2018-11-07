const name = 'harry';
const text = 'Harry is a suspicious character.';
const regexp = new RegExp('\\b(' + name + ')\\b', 'gi');
console.log(text.replace(regexp, '_$1_'));

const name2 = 'dea+hl[]rd';
const text2 = 'This dea+hl[]rd guys is super annoying.';
const escaped = name2.replace(/[\\[.+*?(){|^$]/g, '\\$&');
const regexp2 = new RegExp('\\b' + escaped + '\\b', 'gi');
console.log(text2.replace(regexp2, '_$&_'));
