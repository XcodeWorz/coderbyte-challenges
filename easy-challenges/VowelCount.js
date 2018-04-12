const assert = require('assert');

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(countVowels('December')); // 3
console.log(countVowels('xxx')); // 0

const a1 = "vowels";
const r1 = "array";

assert(r1);