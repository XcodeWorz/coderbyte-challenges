// objective:

// solution:
const assert = require("assert");

function RunLength(str) {
  let count = 1;
  let result = "";

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      result += count + str[i];
      count = 1;
    }
  }
  return result;
}

const a1 = "nnnnnviimmmm"; // input
const r1 = "5n1v2i4m"; // output
const t1 = RunLength(a1);
assert(t1, r1);
