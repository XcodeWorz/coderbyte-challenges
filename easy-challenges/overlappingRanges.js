const assert = require('assert');

const OverlappingRanges = (arr) => {
  let counter = 0;
  for (let i = arr[0]; i < arr[1]; i += 1) {
    if (i >= arr[2] && i <= arr[3]) {
      counter += 1;
    }
  }
  return counter >= arr[4];
};

const a1 = '[1, 8, 2, 4, 4]'; // input
const r1 = 'false'; // output
const t1 = OverlappingRanges(a1);
assert(t1, r1);
console.log(OverlappingRanges(['1, 8, 2, 4, 4']));

const a2 = '[5, 11, 1, 5, 1]'; // input
const r2 = 'true'; // output
const t2 = OverlappingRanges(a2);
assert.strictEqual(t2, r2);
