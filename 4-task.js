import length from './src/string.js';

const text = 'Never forget what you are, for surely the world will not';
const result = `First: ${text[0]}\nLast: ${text[length(text)-1]}`;
console.log(result);