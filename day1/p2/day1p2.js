const fs = require('fs')

let maxes = Array(3).fill(0);
let sum = 0;

for (cal of fs.readFileSync('../input.txt', 'utf8').split(/\n/)) {
    if (cal) {
        sum += Number(cal)
    } else {
        const minIndex = maxes.reduce((p, c, i, a) => c >= a[p] ? p : i, -1);
        maxes[minIndex] = Math.max(maxes[minIndex], sum)
        sum = 0;
    }
}

// Sums max array
const result = maxes.reduce((p, c) => p + c);
console.log(`Most calories being carried by the top 3 (total): ${result}`);
console.log(`Individual: ${maxes.join(', ')}`);